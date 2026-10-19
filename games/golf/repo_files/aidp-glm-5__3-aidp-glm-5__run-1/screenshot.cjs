const { execSync } = require('child_process');
const { chromium } = require('playwright');
const path = require('path');

const config = {
  url: 'http://localhost:55893',
  screenshotPath: path.join(__dirname, 'screenshot.png'),
  urlreportPath: path.join(__dirname, 'url_check_report.json'),
  viewport: { width: 1440, height: 1080 },
  fullPage: true,
  headless: true
};

async function enhancedScreenshot() {
  let browser;
  try {
    browser = await chromium.launch({
      headless: config.headless,
      timeout: 60000
    });
    const page = await browser.newPage();
    await page.setViewportSize(config.viewport);
    console.log(`正在访问: ${config.url}`);
    await page.goto(config.url, {
      timeout: 60000,
      waitUntil: 'networkidle'
    });
    await page.waitForTimeout(3000);

    const clickResult = await page.evaluate(() => {
      if (window.__swalmStartButtonClicked) return { clicked: false, already: true };
      const patterns = [
        /start game/i,
        /begin game/i,
        /开始游戏/i,
        /\bbegin\b/i,
        /\bstart\b/i,
        /开始/i,
      ];
      const selectors = [
        'button',
        '[role="button"]',
        'a',
        'input[type="button"]',
        'input[type="submit"]',
      ];
      const isVisible = (el) => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return !!style && style.visibility !== 'hidden' && style.display !== 'none' && rect.width > 0 && rect.height > 0;
      };
      const getText = (el) => {
        const aria = el.getAttribute('aria-label') || '';
        if (el.tagName === 'INPUT') {
          return ((el.getAttribute('value') || aria)).trim();
        }
        return ((el.innerText || el.textContent || aria)).trim();
      };
      const elements = selectors.flatMap((s) => Array.from(document.querySelectorAll(s)));
      for (const re of patterns) {
        for (const el of elements) {
          if (!isVisible(el)) continue;
          const text = getText(el);
          if (!text) continue;
          if (re.test(text)) {
            window.__swalmStartButtonClicked = true;
            try { el.scrollIntoView({ block: 'center', inline: 'center' }); } catch (e) {}
            try { el.click(); } catch (e) {}
            return { clicked: true, text };
          }
        }
      }
      return { clicked: false };
    });

    if (clickResult && clickResult.clicked) {
      console.log(`检测到开始按钮并已点击: ${clickResult.text}`);
      await page.waitForTimeout(1500);
      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      await page.waitForTimeout(1500);
    }

    const level1Result = await page.evaluate(() => {
      if (window.__swalmLevel1Clicked) return { clicked: false, already: true };
      const patterns = [
        /第一关/i,
        /第\s*1\s*关/i,
        /第\s*一\s*关/i,
        /关卡\s*1(?!\d)/i,
        /关卡\s*一/i,
        /\blevel\s*1\b/i,
      ];
      const selectors = [
        'button',
        '[role="button"]',
        'a',
        '[onclick]',
        'input[type="button"]',
        'input[type="submit"]',
      ];
      const isVisible = (el) => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return !!style && style.visibility !== 'hidden' && style.display !== 'none' && rect.width > 0 && rect.height > 0;
      };
      const getText = (el) => {
        const aria = el.getAttribute('aria-label') || '';
        if (el.tagName === 'INPUT') {
          return ((el.getAttribute('value') || aria)).trim();
        }
        return ((el.innerText || el.textContent || aria)).trim();
      };
      const elements = selectors.flatMap((s) => Array.from(document.querySelectorAll(s)));
      for (const re of patterns) {
        for (const el of elements) {
          if (!isVisible(el)) continue;
          const text = getText(el);
          if (!text) continue;
          if (re.test(text)) {
            window.__swalmLevel1Clicked = true;
            try { el.scrollIntoView({ block: 'center', inline: 'center' }); } catch (e) {}
            try { el.click(); } catch (e) {}
            return { clicked: true, text };
          }
        }
      }
      return { clicked: false };
    });

    if (level1Result && level1Result.clicked) {
      console.log(`检测到关卡入口并已点击: ${level1Result.text}`);
      await page.waitForTimeout(1500);
      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      await page.waitForTimeout(1500);
    }

    console.log('滚动页面触发懒加载...');
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 1000;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 500);
      });
    });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(5000);
    console.log(`正在截取整页截图，保存至: ${config.screenshotPath}`);
    await page.screenshot({
      path: config.screenshotPath,
      fullPage: config.fullPage,
      animations: 'disabled',
      timeout: 60000
    });
    console.log('截图完成！');

    try {
      console.log('正在检测控制台是否报错...');
      execSync(`aidp_url_check ${config.url} -o ${config.urlreportPath}`);
      console.log(`检测完成，报告已生成：${config.urlreportPath}`);
    } catch (error) {
      console.error('控制台输出执行出错了：', error.message);
    }
  } catch (error) {
    console.error('截图过程出错:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
enhancedScreenshot();
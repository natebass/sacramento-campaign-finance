import path from "path"
import { fileURLToPath } from "url"

import puppeteer from "puppeteer"

const __filename = fileURLToPath(
    import.meta.url)
const __dirname = path.dirname(__filename)
const downloadPath = path.join(__dirname, "../../tmp")

export default async function downloadNetfile({ agencyId, year }) {
    const goToUrl = async(u) => {
        await page.goto(u)
        return page
    }
    const downloadPageUrl = `https://public.netfile.com/pub2/Default.aspx?aid=${agencyId}`
    const browser = await puppeteer.launch({ headless: true, timeout: 60000 })
    const page = await browser.newPage()

    await goToUrl(downloadPageUrl)
    await page.goto(downloadPageUrl)

    if (page.url() !== downloadPageUrl) {
        await page.goto(downloadPageUrl)
    }

    await page._client.send("Page.setDownloadBehavior", {
        behavior: "allow",
        downloadPath,
    })

    await page.waitForSelector("#ctl00_phBody_DateSelect")
    await page.select("#ctl00_phBody_DateSelect", year)
    await page.click("#ctl00_phBody_GetExcel")

    // instead of trying to figure out if the file is done
    // downloading, let's just wait 5 seconds and see if
    // that works for now. shrug
    // const fileName = `${aid}-${year}.zip`
    await page.waitForTimeout(15000)
    await browser.close()
}
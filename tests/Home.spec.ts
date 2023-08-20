import { test, expect } from '@playwright/test'

test.describe('Home page test', () => {
  const menuItems = ['Settings', 'Accounts', 'Privacy control']

  test('title test', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await expect(page).toHaveTitle(/txone-demo/)
  })

  test('routes test', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.getByText('Page 1').click()
    await expect(page).toHaveURL(/.*a/)
    await page.getByText('Page 2').click()
    await expect(page).toHaveURL(/.*b/)
  })

  test('square 1 test', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.click("[id='@tonic-ui/react:MenuToggle-1']")
    await expect(page.getByRole('menu')).toBeVisible()
    const items = await page.locator('[role="menu"]')
    const itemsLength = await items.count()
    for (let i = 0; i < itemsLength; i++) {
      await expect(items.nth(i).getByRole('menuitem', { name: menuItems[i] })).toBeInViewport()
    }
  })

  test('square 2 test', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.click("[id='@tonic-ui/react:MenuToggle-2']")
    await expect(page.getByRole('menu')).toBeVisible()
    const items = await page.locator('[role="menu"]')
    const itemsLength = await items.count()
    for (let i = 0; i < itemsLength; i++) {
      await expect(items.nth(i).getByRole('menuitem', { name: menuItems[i] })).toBeInViewport()
    }
  })

  test('square 3 test', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.click("[id='@tonic-ui/react:MenuToggle-3']")
    await expect(page.getByRole('menu')).toBeVisible()
    const items = await page.locator('[role="menu"]')
    const itemsLength = await items.count()
    for (let i = 0; i < itemsLength; i++) {
      await expect(items.nth(i).getByRole('menuitem', { name: menuItems[i] })).toBeInViewport()
    }
  })

  test('square 4 test', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.click("[id='@tonic-ui/react:MenuToggle-9']")
    await expect(page.getByRole('menu')).toBeVisible()
    const items = await page.locator('[role="menu"]')
    const itemsLength = await items.count()
    for (let i = 0; i < itemsLength; i++) {
      await expect(items.nth(i).getByRole('menuitem', { name: menuItems[i] })).toBeInViewport()
    }
  })

  test('smile face test', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.click("[id='@tonic-ui/react:MenuToggle-10']")
    await expect(page.getByRole('menu')).toBeVisible()
    const items = await page.locator('[role="menu"]')
    const itemsLength = await items.count()
    for (let i = 0; i < itemsLength; i++) {
      await expect(items.nth(i).getByRole('menuitem', { name: menuItems[i] })).toBeInViewport()
    }
  })
})

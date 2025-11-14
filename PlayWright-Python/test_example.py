import re
from playwright.sync_api import Page, expect

def test_saucedemo_login(page: Page):
    page.goto("https://www.saucedemo.com/")
    page.locator("[data-test=\"username\"]").fill("standard_user")
    page.locator("[data-test=\"password\"]").fill("secret_sauce")
    page.locator("[data-test=\"login-button\"]").click()
    expect(page.locator("[data-test=\"title\"]")).to_contain_text("Products")
    expect(page.locator("[data-test=\"shopping-cart-link\"]")).to_be_visible()
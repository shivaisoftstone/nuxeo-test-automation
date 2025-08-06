import re
from playwright.sync_api import Playwright, sync_playwright, expect


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("http://127.0.0.1/shadowdom.html")

    def fill_name(name: str):
        name_textbox = page.get_by_role("textbox", name="Name")
        name_textbox.click()
        name_textbox.fill(name)

    def upload_file(file_path: str):
        page.get_by_role("button", name="Upload File").click()
        page.get_by_role("button", name="Upload File").set_input_files(file_path)

    def submit_form():
        page.get_by_role("button", name="Submit").click()

    def upload_another_file():
        page.get_by_role("button", name="Upload Another File").click()

    def download_sample_file():
        with page.expect_download() as download_info:
            page.get_by_role("link", name="Download Sample File").click()
        return download_info.value

    def click_editor():
        page.get_by_text("Editor").click()

    def click_grid2():
        page.get_by_text("Grid 2").click()

    # Usage
    fill_name("shiva")
    click_editor()
    upload_file("Screenshot 2025-06-26 134849.png")
    submit_form()
    upload_another_file()
    download = download_sample_file()
    click_grid2()

    # ---------------------
    context.close()
    browser.close()


with sync_playwright() as playwright:
    run(playwright)

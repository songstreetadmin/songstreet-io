#!/usr/bin/env python3
"""
GoDaddy DNS Update Script for songstreet.io
Updates DNS to point to Render hosting - HEADED MODE
"""

import asyncio
from playwright.async_api import async_playwright
import sys

GODADDY_USERNAME = "137137620095"
GODADDY_PASSWORD = "Morehouse1867"
DOMAIN = "songstreet.io"

# Render DNS Configuration
RENDER_A_RECORD = "216.24.57.1"
RENDER_CNAME = "songstreet-io.onrender.com"

async def update_godaddy_dns():
    async with async_playwright() as p:
        # Launch in HEADED mode so user can see and interact
        browser = await p.chromium.launch(
            headless=False,  # VISIBLE BROWSER
            slow_mo=100  # Slow down for visibility
        )
        context = await browser.new_context(
            viewport={'width': 1400, 'height': 900},
        )
        page = await context.new_page()

        try:
            print("Opening GoDaddy login in visible browser...")
            print("Please complete any CAPTCHA/verification if prompted.")
            print("")

            await page.goto("https://sso.godaddy.com/", wait_until="networkidle", timeout=60000)
            await page.wait_for_timeout(2000)

            # Fill credentials
            print("Entering credentials...")
            await page.fill('#username', GODADDY_USERNAME)
            await page.wait_for_timeout(300)
            await page.fill('#password', GODADDY_PASSWORD)
            await page.wait_for_timeout(300)

            # Click Sign In
            print("Clicking Sign In...")
            await page.click('button:has-text("Sign In")')

            print("\n>>> Waiting for login to complete...")
            print(">>> If you see a verification prompt, please complete it.")
            print("")

            # Wait longer for user to complete verification
            await page.wait_for_timeout(15000)

            # Check if we need to handle the "unusual browser" modal
            try:
                retry_button = page.locator('button:has-text("Try Again")')
                if await retry_button.is_visible(timeout=3000):
                    print("Clicking 'Let's Try Again'...")
                    await retry_button.click()
                    await page.wait_for_timeout(5000)
            except:
                pass

            current_url = page.url
            print(f"Current URL: {current_url}")

            # Navigate directly to DNS management
            print(f"\nNavigating to DNS management for {DOMAIN}...")
            dns_url = f"https://dcc.godaddy.com/manage/{DOMAIN}/dns"
            await page.goto(dns_url, wait_until="networkidle", timeout=60000)
            await page.wait_for_timeout(5000)

            current_url = page.url
            print(f"DNS page URL: {current_url}")

            if "dns" in current_url.lower() or "manage" in current_url.lower():
                print("\n✓ Successfully reached DNS management!")

                # Try to find and click on A record to edit
                print("\nLooking for A record to update...")

                # Wait for DNS records to load
                await page.wait_for_timeout(3000)

                # Try to find the edit button for A record with @ name
                try:
                    # Look for a row with @ and A record
                    a_record_row = page.locator('tr:has-text("@"):has-text("A")')
                    if await a_record_row.count() > 0:
                        print("Found A record for @")
                        # Click edit button in that row
                        edit_btn = a_record_row.locator('button:has-text("Edit"), [data-testid="edit-record"]').first
                        if await edit_btn.is_visible(timeout=3000):
                            await edit_btn.click()
                            await page.wait_for_timeout(1000)

                            # Find the value input and update it
                            value_input = page.locator('input[name="data"], input[placeholder*="Points to"]')
                            if await value_input.is_visible(timeout=3000):
                                await value_input.fill(RENDER_A_RECORD)
                                print(f"Updated A record value to {RENDER_A_RECORD}")

                                # Save
                                save_btn = page.locator('button:has-text("Save")')
                                await save_btn.click()
                                await page.wait_for_timeout(2000)
                                print("✓ A record saved!")
                except Exception as e:
                    print(f"Could not auto-update A record: {e}")
                    print("Please update manually in the browser.")

                # Take screenshot of DNS page
                await page.screenshot(path="/tmp/godaddy_dns_final.png")

                print("\n" + "="*50)
                print("DNS MANAGEMENT PAGE IS OPEN")
                print("="*50)
                print(f"\nPlease update these records:")
                print(f"  1. A Record: @ → {RENDER_A_RECORD}")
                print(f"  2. CNAME: www → {RENDER_CNAME}")
                print("\nThe browser will stay open for 60 seconds...")
                print("="*50)

                # Keep browser open for manual editing
                await page.wait_for_timeout(60000)
            else:
                print("\n⚠ Could not reach DNS page. Current URL:", current_url)
                print("Browser will stay open for 60 seconds for manual navigation.")
                await page.wait_for_timeout(60000)

            await browser.close()
            return True

        except Exception as e:
            print(f"Error: {e}")
            import traceback
            traceback.print_exc()
            print("\nBrowser will stay open for 30 seconds...")
            await page.wait_for_timeout(30000)
            await browser.close()
            return False

if __name__ == "__main__":
    result = asyncio.run(update_godaddy_dns())
    sys.exit(0 if result else 1)

# 2. Tracking Income

Income is every dollar your business receives. Tracking it means recording each
payment, where it came from, and when it arrived. Good income records protect
you if the IRS ever asks, and they make quarterly tax prep much easier.

## Record every payment, even small ones

If you sell a $12 book, record the $12. Do not wait until the end of the year
and try to remember. Common income sources for small businesses:

- Client payments (check, Venmo, PayPal, Stripe, bank transfer)
- Book royalties (KDP, other publishers)
- Reselling sales (eBay, Amazon, Poshmark, local markets)
- Affiliate or referral commissions
- Tips or gratuities related to the business

## What to write down for each payment

| Field | Example |
|-------|---------|
| Date | 2026-03-14 |
| Customer or source | "Client A — blog post" |
| Description | "Freelance writing: 4 articles" |
| Amount | $400.00 |
| Payment method | PayPal |
| Invoice number (if any) | INV-104 |
| Deposited to | "Business checking" |
| Notes | "Net of PayPal fees" |

Use one row per payment. Do not lump a whole month into one line.

## Separate business and personal money

Open a separate bank account for your business if you can. Never pay personal
grocery bills from the business account, and do not deposit customer checks
into your personal account. Mixing money makes bookkeeping harder and can erase
legal protections for an LLC.

## Handling fees

Payment platforms often take a fee. Record the **gross** amount the customer
paid as income, and record the fee as an expense (for example, "Payment
processing fees"). Do not record only what landed in your bank account.

## Income worksheet

Use the Income Log worksheet (`docs/worksheets/worksheet-income-log.md`, or the
matching page in `site/worksheets/`) to record payments by hand or in a
spreadsheet. Print one per month.

## AI prompts for income tracking

Prompt — Sort raw payment notes into an income log:

```
I am keeping my own small-business records. Below are my notes about payments
I received this month. Turn them into a table with these columns:
Date | Customer or source | Description | Amount | Payment method | Notes.

If any amount looks like it might be personal money rather than business
income, flag it with [PERSONAL?]. Do not give tax advice.

My notes:
...
```

Prompt — Match deposits to income records:

```
Here is my bank deposit list and my income log for the month. Tell me which
deposits have a matching income-log row and which deposits do not, so I can
find missing records. Do not give tax advice.

Deposits:
...
Income log:
...
```

-- Asdale Dynamics, LLC

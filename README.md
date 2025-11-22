# Bigg Manuel Portfolio - EmailJS Setup

## 1. Email Template Code (Copy This)

Go to **EmailJS Dashboard** -> **Email Templates** -> **Create New Template** -> **Source Code** (< > icon).
Paste the code below to match your website's dark theme.

```html
<div style="background-color: #0B0C15; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 20px; color: #e2e8f0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #161822; border-radius: 16px; border: 1px solid #334155; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);">
    
    <!-- Header -->
    <div style="padding: 30px 30px 0 30px; text-align: center;">
       <h2 style="color: #14F195; margin: 0; text-transform: uppercase; letter-spacing: 2px; font-size: 24px; font-weight: 800;">Bigg.Manuel</h2>
       <p style="color: #6FBCF0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;">New Portfolio Inquiry</p>
    </div>

    <!-- Divider -->
    <div style="margin: 20px 30px; border-bottom: 1px dashed #334155;"></div>

    <!-- Content Area -->
    <div style="padding: 0 30px 40px 30px;">
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="vertical-align: top; width: 60px;">
             <!-- Icon -->
             <div style="width: 48px; height: 48px; background-color: #14F195; border-radius: 12px; color: #0B0C15; font-size: 24px; line-height: 48px; text-align: center;">
               👤
             </div>
          </td>
          <td style="vertical-align: top; padding-left: 15px;">
             <div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: bold; letter-spacing: 0.5px;">Sender</div>
             <div style="font-size: 18px; color: #ffffff; font-weight: bold; margin-top: 2px;">{{user_name}}</div>
             <div style="font-size: 14px; color: #14F195; margin-top: 2px;">{{user_email}}</div>
          </td>
        </tr>
      </table>

      <!-- Message Box -->
      <div style="margin-top: 25px; background-color: #0B0C15; border: 1px solid #334155; border-radius: 12px; padding: 20px; position: relative;">
         <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background-color: #9945FF; border-top-left-radius: 12px; border-bottom-left-radius: 12px;"></div>
         <div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: bold; letter-spacing: 0.5px; margin-bottom: 8px;">Message Content</div>
         <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">{{message}}</p>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #0f111a; padding: 15px; text-align: center; border-top: 1px solid #334155;">
      <p style="margin: 0; font-size: 11px; color: #64748b;">
        Sent via Bigg Manuel Portfolio Contact Form
      </p>
    </div>
    
  </div>
</div>
```

## 2. EmailJS Settings

Ensure your EmailJS template settings map these variables correctly:
*   `{{user_name}}`
*   `{{user_email}}`
*   `{{message}}`

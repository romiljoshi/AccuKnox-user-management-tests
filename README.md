# 🚀 AccuKnox User Management Tests

![Playwright](https://img.shields.io/badge/Playwright-Automation-green?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)


End-to-End UI Automation Testing framework for the **AccuKnox User Management** application using **Playwright** and **TypeScript**. This project follows the **Page Object Model (POM)** design pattern to build scalable, maintainable, and reusable test automation.

---

## 📌 Features

* ✅ End-to-End UI Automation
* ✅ Page Object Model (POM)
* ✅ Playwright with TypeScript
* ✅ Cross-Browser Testing
* ✅ HTML Test Reports
* ✅ Reusable Page Classes
* ✅ Easy Test Execution
* ✅ Scalable Framework Structure

---

## 🛠 Tech Stack

| Technology | Purpose               |
| ---------- | --------------------- |
| Playwright | Browser Automation    |
| TypeScript | Programming Language  |
| Node.js    | Runtime Environment   |
| npm        | Dependency Management |

---

# 📂 Project Structure

```text
AccuKnox-user-management-tests
│
├── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── UserManagementPage.ts
│
├── tests/
│   ├── login.spec.ts
│   └── userManagement.spec.ts
│
├── utils/
├── test-data/
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙️ Prerequisites

Before running the project, make sure you have installed:

* Node.js (v18 or later)
* npm
* Git

---

# 🚀 Project Setup

### Clone the Repository

```bash
git clone https://github.com/romiljoshi/AccuKnox-user-management-tests.git
```

Move into the project folder

```bash
cd AccuKnox-user-management-tests
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# ▶️ Running the Test Cases

## Run all tests

```bash
npx playwright test
```

## Run in headed mode

```bash
npx playwright test --headed
```

## Run a specific test

```bash
npx playwright test tests/userManagement.spec.ts
```

## Run on Chromium

```bash
npx playwright test --project=chromium
```

## Run on Firefox

```bash
npx playwright test --project=firefox
```

## Run on WebKit

```bash
npx playwright test --project=webkit
```

---

# 📊 View Test Report

Generate and open the HTML report

```bash
npx playwright show-report
```

---



## User Management Page

> Add your screenshot here

```
docs/images/user-management.png
```

```markdown
![User Management](docs/images/user-management.png)
```

---

## HTML Report

> Add your Playwright report screenshot here

```
docs/images/report.png
```

```markdown
![Playwright Report](docs/images/report.png)
```

---

# 📁 Where to Store Screenshots

Create the following folders:

```text
docs/
└── images/
      login-page.png
      user-management.png
      report.png
```

---

# 🧪 Framework Design

This project follows the **Page Object Model (POM)** architecture.

* **Pages** → Contains page classes and locators
* **Tests** → Contains test scenarios
* **Utils** → Utility methods and helper functions
* **Playwright Config** → Browser and execution configuration

---

# 📦 Playwright Version

Check your installed version:

```bash
npx playwright --version
```

Example:

```text
Version 1.54.2
```

---

# 📄 Useful Commands

| Command                        | Description          |
| ------------------------------ | -------------------- |
| `npm install`                  | Install dependencies |
| `npx playwright install`       | Install browsers     |
| `npx playwright test`          | Execute all tests    |
| `npx playwright test --headed` | Run with browser UI  |
| `npx playwright show-report`   | Open HTML report     |

---

# 👨‍💻 Author

**Rahul Joshi**

* GitHub: https://github.com/romiljoshi
* LinkedIn: *(Add your LinkedIn profile URL)*

---

## ⭐ If you found this project useful, consider giving it a Star!

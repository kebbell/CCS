#CCS full-stack coding exercise

Introduction
This take-home coding exercise is intended to help you demonstrate some of the most important skills we’re looking for in a technical candidate. In particular we want to understand:

How you think about and plan the task

Coding skills, both backend and frontend

Written and oral communication

Expectations
We hope that you will find this to be an enjoyable and rewarding challenge. We expect that the task should take you a few hours to complete it to a good standard (approximately 3-5 hours).

The purpose of this exercise is to give you a chance to demonstrate your strengths. You are not expected to produce a perfect implementation, and it is natural that some aspects of your submission will be stronger than others.

We will spend time talking through your work during a subsequent interview, where you will be expected to explain your thought process and implementation.


You can use any technology stack you wish to complete the task. It is a good idea to choose a language and frameworks that you are most comfortable with in order to help you to demonstrate your skills. Having said that, most of our codebase uses the following, and strong candidates will be able to demonstrate their competence with one or more of the these:

Javascript or Typescript
Node.js
Express
Postgres with Sequelize ORM
Vue (2 or 3)
Bootstrap (4 or 5)
Tests using Mocha and Chai or the Node test runner

Feel free to mock / stub anything which your implementation relies on but which is not core to the task itself (for example, authentication endpoints) if you wish to.

Commit your work to a GitHub (or similar) repository. This can be a public repository or a private repository if you prefer; please grant access to @chris-jamieson for private repositories.

Please ensure that your finished project includes a README.md document with instructions on how to run your code. You may wish to present your completed project alongside this; a write-up or screen recording (e.g. using Loom) is a great way to showcase your thought process and your work.
Use of AI Tools

We recognize that AI tools like ChatGPT, GitHub Copilot, Claude, and Supermaven are increasingly part of a developer's toolkit. We use these tools in our daily work and acknowledge their potential to enhance productivity. However, for this take-home exercise, we have specific guidelines:

Limited AI Usage: You can use AI assistants if you wish, but this should be limited to minor tasks such as syntax checking, documentation lookups, or generating small code snippets. The overall design, architecture, and primary implementation must be your own work.

Demonstration of Skills: This exercise is designed to showcase your personal knowledge, problem-solving abilities, and coding style. Over-reliance on AI may hinder our ability to assess these crucial aspects. You will be expected to explain in detail the rationale behind your implementation choices. Ensure you fully understand and can justify every aspect of your code.

Transparency: If you use AI tools, please mention their usage in your submission. Include a brief section explaining how you used AI assistance.

Professional Context: Approach AI usage as you would in a real work environment, where you're responsible for the quality, maintainability, and understanding of your code.
Remember, while AI can be a valuable aid, this exercise is an opportunity to demonstrate your unique skills and approach to problem-solving. We want to see how you think and approach the task, not how well you can use an AI.


Brief
As a payment processing business, our customers are merchants (for example a cafe, retail shop or taxi driver). From time to time a merchant needs to update their bank account details. Currently, merchants need to phone or email to the customer support team in order to do this. This is problematic for the following reasons:


Inefficiency: the support team has to manually carry out work which could be automated.
Mistakes: a support agent may write down the wrong digits when taking instructions by phone
Security: email and phone contacts are susceptible to spoofing and social engineering. Attackers know this and sometimes maliciously try to change bank account details in order to redirect funds to an account they control.


Your task is to allow merchants to automatically update their bank account details using a web interface (via their web browser). Focus on the following items in order of priority (most important first). You are not expected to complete all the items on the list; just do what you can in the time available to you:


Design appropriate RESTful API endpoint(s) for this feature

Implement your API endpoint(s) in code

Include some appropriate automated tests

Design a UI which consumes your API endpoint(s)

Implement your UI

Bonus: implement API calls for external services (it’s OK to mock these based on documentation if you can’t get API keys), e.g.:

Notify the merchant that their account information has been updated (e.g. via Twilio)

Look up the bank information using a sort code lookup API

Run a Confirmation of Payee check (for example, via Modulr or SurePay)

Help

If you get stuck or have a question, just send an email to chris@ccs.im

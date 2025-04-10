<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <p align="center">
  <a href="https://github.com/GRB-Workspace/Nestjs-Intro.git" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h2 align="center">Nest.js Intro</h2>

  <p align="center">
    A beginner-friendly project showcasing fundamental <strong>NestJS</strong> concepts through structured code examples, from controllers and providers to validation and RESTful APIs.
    <br />
    <br />
    <strong>
      Documentation:
      <a href="https://drive.google.com/file/d/1op8NiIU_48FDM_n8_rw3_Ev6LAbUH9sv/view?usp=sharing" target="_blank">
        Nest.js Note
      </a> |
      <a href="https://documenter.getpostman.com/view/36681432/2sB2cXA23q" target="_blank">
        Postman Documentation
      </a>
    </strong>
    <br />
  </p>
</div>

---

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
      <ul>
        <li><a href="#core-features">Core Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    <li><a href="#getting-started">Getting Started</a></li>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation-and-setup">Installation & Setup</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
      </ul>
    <li><a href="#resources">Resources</a></li>
    <li><a href="#video-source">Video Source</a></li>
  </ol>
</details>

---

## About The Project

**Nest.js Intro** is a structured tutorial repository that demonstrates key NestJS concepts through modular code examples. Organized into separate directories, it covers controllers, providers, DTO validation, RESTful APIs, and essential NestJS features, enabling you to learn and reference best practices for building scalable server-side applications with TypeScript.

### Core Features

- **Modular Controllers**  
  Organize your request handling logic with dedicated controllers for clean routing.
- **Providers & Dependency Injection**  
  Leverage NestJS’s provider system to manage services and inject dependencies.
- **DTO Validation**  
  Enforce data integrity using DTOs (Data Transfer Objects) and class-validator decorators.
- **REST API Endpoints**  
  Implement CRUD operations and role-based queries for users and employees.
- **Essentials (Loggers, Guards, Error handling, Exception)**  
  Explore NestJS’s powerful features.

---

### Built With

- [NestJS](https://docs.nestjs.com/) – A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [Node.js](https://nodejs.org/) – JavaScript runtime built on Chrome's V8 engine.
- [TypeScript](https://www.typescriptlang.org/) – Typed superset of JavaScript.
- [Prisma](https://www.prisma.io/) – Next-generation ORM for Node.js & TypeScript.
- [Neon](https://console.neon.tech/) – Serverless PostgreSQL database.
- [Postman](https://www.postman.com/) – API development and testing tool.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Getting Started

Follow these steps to set up and run **Nest.js Intro** locally.

### Prerequisites

- **Node.js** (v22 or higher)
- **npm** or **yarn**
- **Git**

### Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GRB-Workspace/Nestjs-Intro.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Nestjs-Intro
   ```
3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
4. **Configure environment variables:**
    - Create a `.env` file based on `.env.example`.
    - Add your database connection string and any other required variables.
5. **Run database migrations (if using Prisma):**
   ```bash
   npx prisma migrate dev
   ```
6. **Start the development server:**
   ```bash
   npm run start:dev
   ```
7. **Access the API documentation in Postman:**
    - [Postman Documentation](https://documenter.getpostman.com/view/36681432/2sB2cXA23q)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Project Structure

```plaintext
Nestjs-Intro
├── .git
├── 01-Controllers
├── 02-Providers
├── 03-DTO-Validation
├── 04-REST-API
├── 05-Essentials
└── LICENSE
```

- **01-Controllers** – Example controllers for routing and request handling.
- **02-Providers** – Service providers demonstrating dependency injection.
- **03-DTO-Validation** – DTO classes and validation rules using class-validator.
- **04-REST-API** – Complete RESTful endpoints for users and employees.
- **05-Essentials** – Error handling, CORS, Logging, and etc showcasing advanced NestJS features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Resources

- **NestJS Documentation**: https://docs.nestjs.com/
- **Neon Console**: https://console.neon.tech/app/projects
- **Prisma Docs**: https://www.prisma.io/docs
- **NestJS-Prisma Integration**: https://nestjs-prisma.dev/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Video Source

Learn step-by-step by following the tutorial video:  
[![Nest.js Intro Tutorial](https://img.youtube.com/vi/8_X0nSrzrCw/0.jpg)](https://youtu.be/8_X0nSrzrCw?si=eWV9zOucN2VeO8Qy)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<div align="center">
  <p>
    &copy; 2025 Gayanuka Bulegoda
  </p>
</div>

---



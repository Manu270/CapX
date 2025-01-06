
# **Simple Portfolio Tracker**

Manage your stock portfolio seamlessly with the **Simple Portfolio Tracker**—a full-stack web application designed for intuitive tracking, dynamic updates, and robust data management.

---

### 🚀 **Key Features**
- **📈 Add Stocks**: Quickly input stock details (name, symbol, quantity, price).  
- **✏️ Edit Stocks**: Make real-time adjustments to your stock information.  
- **🗑️ Delete Stocks**: Effortlessly remove unwanted stocks.  
- **💰 Track Portfolio Value**: Calculate portfolio totals dynamically.  
- **📊 Planned Updates**: Advanced dashboards and real-time stock price integration.  

---

### 🛠️ **Technology Stack**
#### Frontend:
- **React.js**  
- **Tailwind CSS**

#### Backend:
- **Java Spring Boot**  
- **MySQL**  

---

### 📋 **Prerequisites**
Before you begin, make sure to have the following tools installed:
- **[Node.js & npm](https://nodejs.org/)**  
- **[Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)**  
- **[MySQL](https://www.mysql.com/)**  
- **[Maven](https://maven.apache.org/)**  

---

### 🏗️ **Getting Started**
#### **Step 1: Clone the Repository**
```bash
git clone https://github.com/VighneshVejandla/portfolioTracker.git
cd portfolioTracker
```

#### **Step 2: Set Up the Backend**
1. Navigate to the `backend` directory:  
   ```bash
   cd backend
   ```
2. Configure the database in `src/main/resources/application.properties`:  
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_tracker
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Build and start the backend:  
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   The backend will start at `http://localhost:8080`.

#### **Step 3: Set Up the Frontend**
1. Navigate to the `frontend` directory:  
   ```bash
   cd ../frontend
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the development server:  
   ```bash
   npm start
   ```
   The frontend will be available at `http://localhost:3000`.

---

### 🖥️ **How to Use**
1. **Backend:** Make sure the Spring Boot server is running at `http://localhost:8080`.  
2. **Frontend:** Start the React development server at `http://localhost:3000`.  
3. **Access:** Open your browser and go to `http://localhost:3000` to start managing your portfolio.

---

### 📡 **API Overview**
#### **Get All Stocks**  
- **Endpoint:** `GET /api/stocks`  

#### **Add a Stock**  
- **Endpoint:** `POST /api/stocks`  
- **Body:**  
  ```json
  {
    "name": "Example Stock",
    "symbol": "EXM",
    "quantity": 50,
    "price": 200.0
  }
  ```

#### **Update a Stock**  
- **Endpoint:** `PUT /api/stocks/{id}`  
- **Body:**  
  ```json
  {
    "name": "Updated Stock",
    "symbol": "UPD",
    "quantity": 100,
    "price": 250.0
  }
  ```

#### **Delete a Stock**  
- **Endpoint:** `DELETE /api/stocks/{id}`  

---

### 🔮 **Future Enhancements**
1. **Real-Time Stock Prices:** Integrate with live stock APIs for instant updates.  
2. **Advanced Dashboards:** Gain deeper insights with detailed analytics.  
3. **User Authentication:** Secure your portfolio with login and roles.  

---

### 📂 **Project Structure**
```
portfolioTracker/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com.portfolio/
│   │   │   │       ├── App.java
│   │   │   │       ├── controller/
│   │   │   │       ├── dto/
│   │   │   │       ├── exception/
│   │   │   │       ├── model/
│   │   │   │       ├── repository/
│   │   │   │       └── service/
│   │   │   └── resources/
│   │   │       └── application.properties
│   └── pom.xml
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
```


### 📜 **License**
This project is licensed under the **MIT License**.  

--- 

Make managing your portfolio a breeze with **Simple Portfolio Tracker**!

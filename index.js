const express = require('express');
const app = express();
const PORT = 3000;

const productRoutes = require("./routes/productRoutes");
const webRoutes = require('./routes/webRoutes');

const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./config/swagger.js')
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use("/api/v1", productRoutes);
app.use('/', webRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Start server

app.listen(PORT, () => {

          console.log(`🚀 Server is running at http://localhost:${PORT}`);

});
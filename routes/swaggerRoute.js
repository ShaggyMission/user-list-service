const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const router = express.Router();
const swaggerDocument = YAML.load('./docs/swagger.yaml');

router.use('/listUsers-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;

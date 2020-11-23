const request = require("supertest");
const app = require('./app.js');

describe('Test the "products" path', () => {
    test('It should respond with an array of all 100 products in the database and every product should be an object', () => {
        return request(app)
        .get('/api/products')
        .then(response => {
            var result = JSON.parse(response.text);
            var allObjects = true;
            var allCorrectNames = true;
            var productNames = ['womensJacket', 'cap', 'socks', 'mensSoccerPants', 'kidsTee'];
            // loop through results to make sure every product is an object
            for (let i = 0; i < result.length; i++) {
                if (typeof result[i] !== 'object') {
                    allObjects = false;
                    break;
                }
            }
            // loop through results to make sure every product has both a name key and photos key and that the name is one of the valid names
            for (let i = 0; i < result.length; i++) {
                if ((!result[i].name || !result[i].photos) || (!productNames.includes(result[i].name))) {
                    allCorrectNames = false;
                    break;
                }
            }
            expect(response.statusCode).toBe(200);
            expect(Array.isArray(result)).toBe(true);
            expect(allObjects).toBe(true);
            expect(allCorrectNames).toBe(true);
            expect(result.length).toBe(100);
        });
    });
});

describe('Test the "products/:id" path', () => {
    test('It should respond with the correct product based on the given id', () => {
        return request(app)
        .get('/products/1')
        .then(response => {
            expect(response.statusCode).toBe(301);
        });
    });
});

describe('Test the "/api/products/:id" path', () => {
    test('It should respond with the JSON data for the correct product based on the given id', () => {
        return request(app)
        .get('/api/products/1')
        .then(response => {
            var result = JSON.parse(response.text);
            expect(Array.isArray(result)).toBe(true);
            expect(typeof result[0]).toBe('object');
            expect(result[0].id).toBe(1);
        });
    });
});

describe('Test a failed request', () => {
    test('It should respond with a status of 404 if the item is not found', () => {
        return request(app)
        .get('/api/product/101')
        .then(response => {
            expect(response.statusCode).toBe(404);
        });
    });
});
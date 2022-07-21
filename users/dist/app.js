"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('It works');
});
const port = process.env.NODE_PORT || 3000;
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

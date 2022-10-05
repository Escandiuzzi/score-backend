"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = require("express");
exports.route = (0, express_1.Router)();
exports.route.get('/', (0, cors_1.default)(), (req, res) => {
    res.send('Hello World!');
});

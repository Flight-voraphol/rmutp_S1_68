"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const client_1 = require("@prisma/client");
//import { PrismaClient } from "../generated/prisma/Client";
const prisma = new client_1.PrismaClient();
const app = new hono_1.Hono();
app.get("/", (C) => C.text("hello, world"));
app.get("/about", (C) => {
    return C.json({
        message: "วรพล แต้อวง"
    });
});
app.get("/profile", async (c) => {
    //logic
    const profile = await prisma.profile.findMany();
    return c.json(profile);
});
exports.default = app;

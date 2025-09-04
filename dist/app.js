"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const adminRoutes_1 = __importDefault(require("./Routes/adminRoutes"));
const method_override_1 = __importDefault(require("method-override"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, method_override_1.default)('_method'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "Views"));
app.use("/", adminRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
//# sourceMappingURL=app.js.map
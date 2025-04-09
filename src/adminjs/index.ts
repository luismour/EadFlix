import AdminJS from "adminjs"
import AdminJSExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database"
import { adminJsResources } from "./resources"
import { locale } from "./locale"
import { dashboardOptions } from "./dashboard"
import { brandingOptions } from "./branding"
import { authenticateOptions } from "./authentication"
require('dotenv').config()

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    resources: adminJsResources,
    rootPath: "/admin",
    locale: locale,
    branding: brandingOptions,
    dashboard: dashboardOptions
    })
    

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminJs, 
    authenticateOptions,
    null, {
    resave: false,
    saveUninitialized: false
  }
)
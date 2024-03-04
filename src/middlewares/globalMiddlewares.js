import cors from "cors"
import express from "express"

const corsMiddleware = cors({
  origin: '*'
})

const jsonMiddleware = express.json()

export {
  corsMiddleware,
  jsonMiddleware
}
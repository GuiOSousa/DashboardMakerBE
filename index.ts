import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import userRouter from './src/routes/userRoutes';
import dashboardRouter from './src/routes/dashboardRoutes';

async function main() {
	const port = 3100
	const app = express()
	app.use(bodyParser.json())
	app.use(cors())
	

	app.get("/", (req, res) => {
		res.send("Servidor funcionando ✅");
		});

	app.use('/users', userRouter);
	app.use('/dashboards', dashboardRouter)

	app.listen(port, () => console.log(`http://localhost:${port}`));
}

main().catch(console.error);
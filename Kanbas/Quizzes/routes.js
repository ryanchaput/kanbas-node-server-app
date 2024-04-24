import db from "../Database/index.js";
function QuizRoutes(app) {
    app.put("/api/quizzes/:mid", (req, res) => {
        const { mid } = req.params;
        const quizIndex = db.quizzes.findIndex(
            (m) => m._id === mid);
        console.log(quizIndex);
        db.quizzes[quizIndex] = {
            ...db.quizzes[quizIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

    app.get("/api/quizzes/:qid", (req, res) => {
        const { qid } = req.params;
        const quiz = db.quizzes.find((m) => m._id === qid);
        res.send(quiz);
    });

    app.delete("/api/quizzes/:mid", (req, res) => {
        const { mid } = req.params;
        db.quizzes = db.quizzes.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });

    app.post("/api/courses/:cid/quizzes", (req, res) => {
        const { cid } = req.params;
        const newQuiz = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.quizzes.push(newQuiz);
        res.send(newQuiz);
    });

    app.get("/api/courses/:cid/quizzes", (req, res) => {
        const { cid } = req.params;
        const quizzes = db.quizzes
            .filter((m) => m.course === cid);
        res.send(quizzes);
    });
}
export default QuizRoutes;
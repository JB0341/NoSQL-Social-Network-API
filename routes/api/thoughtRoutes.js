const router = require("express").router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controller/thoughtController");

router.route("/").get(getAllThoughts).post(createThought);

router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

    router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
    router.route("/:thoughtId/reactions").post(addReaction);

    module.exports = router;
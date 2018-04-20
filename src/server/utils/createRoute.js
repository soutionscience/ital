module.exports = function(controller, router){
    router.route('/')
    .get(controller.get)
    .post(controller.post)
    .delete(controller.delete)

    router.route('/:id/days')
    .post(controller.postTypes)

    router.route('/:id/services')
    .post(controller.postTypes)

    router.route('/:id/images')
    .post(controller.postImages)



}
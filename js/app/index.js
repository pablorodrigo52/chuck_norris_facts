const controller = new FactsController();
const query = ParamService.checkParam();
(query) ? controller.setFact(query) : controller.getRandomFact();


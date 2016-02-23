var appRouter = function(app) {
  app.get("/converttemp", function(req, res) {
      if(!req.query.celsius && !req.query.farenheit) {
          return res.send({"status": "error", "message": "missing query parameter: farenheit or celsius"});
      } else if(req.query.celsius) {
          var far = (parseInt(req.query.celsius)* 9 / 5) + 32;
          return res.send({"celsius": req.query.celsius, "farenheit": far.toString()});
      } else if (req.query.farenheit) {
         var cel = (parseInt(req.query.farenheit) - 32) * 5 / 9;
         return res.send({"celsius": cel.toString(), "farenheit": req.query.farenheit});
      }
  });
};
 
module.exports = appRouter;
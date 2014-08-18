module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {

      res.render('index',
                {'assetPath' : assetPath});

    });

      app.get('/scenarios', function (req, res) {
      res.render('scenarios',
                {'assetPath' : assetPath});

    });

//Scenario 1
    app.get('/start_scenario1', function (req, res) {
      res.render('start_scenario1',
                {'assetPath' : assetPath});

    });
    
    app.get('/what_scenario1_2', function (req, res) {
      res.render('what_scenario1_2',
                {'assetPath' : assetPath});

    });
    
    app.get('/group_scenario1_3', function (req, res) {
      res.render('group_scenario1_3',
                {'assetPath' : assetPath});

    });

        app.get('/group_company_scenario1_4', function (req, res) {
      res.render('group_company_scenario1_4',
                {'assetPath' : assetPath});

    });

               app.get('/group_company_edit_scenario1_5', function (req, res) {
      res.render('group_company_edit_scenario1_5',
                {'assetPath' : assetPath});

    });
       
                   app.get('/alterations_scenario1_6', function (req, res) {
      res.render('alterations_scenario1_6',
                {'assetPath' : assetPath});

    });

    app.get('/alterations_check_scenario1_7', function (req, res) {
      res.render('alterations_check_scenario1_7',
                {'assetPath' : assetPath});
       
         });

    
    app.get('/summary_scenario1_8', function (req, res) {
      res.render('summary_scenario1_8',
                {'assetPath' : assetPath});
       
         });

     app.get('/confirmation_scenario1_9', function (req, res) {
      res.render('confirmation_scenario1_9',
                {'assetPath' : assetPath});
       
         });
        app.get('/summary_scenario1_8_details', function (req, res) {
      res.render('summary_scenario1_8_details',
                {'assetPath' : assetPath});
       
         });
  //Scenario 2
  app.get('/start_scenario2', function (req, res) {
      res.render('start_scenario2',
                {'assetPath' : assetPath});

    });
    app.get('/what_scenario2_2', function (req, res) {
      res.render('what_scenario2_2',
                {'assetPath' : assetPath});

    });

    app.get('/check_scenario2_3', function (req, res) {
      res.render('check_scenario2_3',
                {'assetPath' : assetPath});

    });

        app.get('/errors_scenario2_4', function (req, res) {
      res.render('errors_scenario2_4',
                {'assetPath' : assetPath});

    });


    }
};

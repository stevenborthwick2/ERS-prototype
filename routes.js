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

//CSOP annual return Scenario 1
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

        //Scenario 3

        app.get('/start_scenario3', function (req, res) {
      res.render('start_scenario3',
                {'assetPath' : assetPath});

    });


        app.get('/what_scenario3_2', function (req, res) {
      res.render('what_scenario3_2',
                {'assetPath' : assetPath});

    });

                app.get('/check_scenario3_3', function (req, res) {
      res.render('check_scenario3_3',
                {'assetPath' : assetPath});

    });
                app.get('/no_errors_scenario3_4', function (req, res) {
      res.render('no_errors_scenario3_4',
                {'assetPath' : assetPath});

    });

     app.get('/group_scenario3_5', function (req, res) {
      res.render('group_scenario3_5',
                {'assetPath' : assetPath});

    });

        app.get('/group_company_scenario3_6', function (req, res) {
      res.render('group_company_scenario3_6',
                {'assetPath' : assetPath});

    });

               app.get('/group_company_edit_scenario3_7', function (req, res) {
      res.render('group_company_edit_scenario3_7',
                {'assetPath' : assetPath});

    });
       
                   app.get('/alterations_scenario3_8', function (req, res) {
      res.render('alterations_scenario3_8',
                {'assetPath' : assetPath});

    });

    app.get('/alterations_check_scenario3_9', function (req, res) {
      res.render('alterations_check_scenario3_9',
                {'assetPath' : assetPath});
       
         });

    
    app.get('/summary_scenario3_10', function (req, res) {
      res.render('summary_scenario3_10',
                {'assetPath' : assetPath});
       
         });

     app.get('/confirmation_scenario3_11', function (req, res) {
      res.render('confirmation_scenario3_11',
                {'assetPath' : assetPath});

       });

     //Checking Service Scenario 1

        app.get('/checking_service/checking_start_scenario1', function (req, res) {
      res.render('checking_service/checking_start_scenario1',
                {'assetPath' : assetPath});

       });
    
    app.get('/checking_service/check_scenario1_2', function (req, res) {
      res.render('checking_service/check_scenario1_2',
                {'assetPath' : assetPath});

       });

        app.get('/checking_service/errors_scenario1_3', function (req, res) {
      res.render('checking_service/errors_scenario1_3',
                {'assetPath' : assetPath});

       });
               app.get('/checking_service/checking_start_scenario2', function (req, res) {
      res.render('checking_service/checking_start_scenario2',
                {'assetPath' : assetPath});

       });

       app.get('/checking_service/check_scenario2_2', function (req, res) {
      res.render('checking_service/check_scenario2_2',
                {'assetPath' : assetPath});

       });

       app.get('/checking_service/confirmation_scenario2_3', function (req, res) {
      res.render('checking_service/confirmation_scenario2_3',
                {'assetPath' : assetPath});

       });





    }
};

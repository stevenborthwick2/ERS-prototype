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

       app.get('/examples', function (req, res) {
      res.render('examples',
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

       app.get('/scenario2_5_Errors_CSOP', function (req, res) {
      res.render('scenario2_5_Errors_CSOP',
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
    
  app.get('/checking_service/select_scheme_scenario1_2', function (req, res) {
      res.render('checking_service/select_scheme_scenario1_2',
                {'assetPath' : assetPath});

       });

    app.get('/checking_service/checking_scenario1_3', function (req, res) {
      res.render('checking_service/checking_scenario1_3',
                {'assetPath' : assetPath});

       });

        app.get('/checking_service/errors_scenario1_4', function (req, res) {
      res.render('checking_service/errors_scenario1_4',
                {'assetPath' : assetPath});   

                 });
        
          app.get('/checking_service/errors_scenario1_5', function (req, res) {
      res.render('checking_service/errors_scenario1_5',
                {'assetPath' : assetPath});   

                 });

      // Checking Scenario 2

   
               app.get('/checking_service/checking_start_scenario2', function (req, res) {
      res.render('checking_service/checking_start_scenario2',
                {'assetPath' : assetPath});

       });

       app.get('/checking_service/select_scheme_scenario2_2', function (req, res) {
      res.render('checking_service/select_scheme_scenario2_2',
                {'assetPath' : assetPath});

       });

        app.get('/checking_service/checking_scenario2_3', function (req, res) {
      res.render('checking_service/checking_scenario2_3',
                {'assetPath' : assetPath});

       });

       app.get('/checking_service/confirmation_scenario2_4', function (req, res) {
      res.render('checking_service/confirmation_scenario2_4',
                {'assetPath' : assetPath});

       });

                 app.get('/checking_service/error_webpage', function (req, res) {
      res.render('checking_service/error_webpage',
                {'assetPath' : assetPath});

       });

                 // Checking Scenario 3

   
               app.get('/checking_service/checking_start_scenario3', function (req, res) {
      res.render('checking_service/checking_start_scenario3',
                {'assetPath' : assetPath});

       });
                           app.get('/checking_service/templates', function (req, res) {
      res.render('checking_service/templates',
                {'assetPath' : assetPath});

       });

      app.get('/checking_service/what_scenario3_2_test', function (req, res) {
      res.render('checking_service/what_scenario3_2_test',
                {'assetPath' : assetPath});

       });
      
      app.get('/checking_service/checking_scenario3_3', function (req, res) {
      res.render('checking_service/checking_scenario3_3',
                {'assetPath' : assetPath});

       });



                 // user testing
     
       app.get('/user_testing/user_testing', function (req, res) {
      res.render('user_testing/user_testing',
                {'assetPath' : assetPath});

    });

app.get('/user_testing/logout1', function (req, res) {
      res.render('user_testing/logout1',
                {'assetPath' : assetPath});

    });

  app.get('/user_testing/logout1_2', function (req, res) {
      res.render('user_testing/logout1_2',
                {'assetPath' : assetPath});

    });
      app.get('/user_testing/logout1_3', function (req, res) {
      res.render('user_testing/logout1_3',
                {'assetPath' : assetPath});

    });
      app.get('/user_testing/logout1_4', function (req, res) {
      res.render('user_testing/logout1_4',
                {'assetPath' : assetPath});

    });

      app.get('/user_testing/logout1_4_2', function (req, res) {
      res.render('user_testing/logout1_4_2',
                {'assetPath' : assetPath});

    });

      app.get('/user_testing/logout1_4_3', function (req, res) {
      res.render('user_testing/logout1_4_3',
                {'assetPath' : assetPath});

    });

      app.get('/user_testing/logout1_4_4', function (req, res) {
      res.render('user_testing/logout1_4_4',
                {'assetPath' : assetPath});

    });


      app.get('/user_testing/logout1_5', function (req, res) {
      res.render('user_testing/logout1_5',
                {'assetPath' : assetPath});

    });

    app.get('/user_testing/checking_start_logout', function (req, res) {
      res.render('user_testing/checking_start_logout',
                {'assetPath' : assetPath});

    });



     app.get('/confirmation_declaration_test', function (req, res) {
      res.render('confirmation_declaration_test',
                {'assetPath' : assetPath});

    });

        app.get('/alterations_declaration_test', function (req, res) {
      res.render('alterations_declaration_test',
                {'assetPath' : assetPath});

    });

// SIP End of Year Return Scenario 1
       app.get('/SIP/scenario1_0_Start_SIP', function (req, res) {
      res.render('SIP/scenario1_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP/scenario1_1_What_SIP', function (req, res) {
      res.render('SIP/scenario1_1_What_SIP',
                {'assetPath' : assetPath});

    });

                          app.get('/SIP/scenario1_2_Group_SIP', function (req, res) {
      res.render('SIP/scenario1_2_Group_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP/scenario1_3_Group_Details_SIP', function (req, res) {
      res.render('SIP/scenario1_3_Group_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario1_4_Group_Edit_SIP', function (req, res) {
      res.render('SIP/scenario1_4_Group_Edit_SIP',
                {'assetPath' : assetPath});

    });

         
             app.get('/SIP/scenario1_5_Trustee_Details_SIP', function (req, res) {
      res.render('SIP/scenario1_5_Trustee_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario1_6_Trustee_Edit_SIP', function (req, res) {
      res.render('SIP/scenario1_6_Trustee_Edit_SIP',
                {'assetPath' : assetPath});

    });

app.get('/SIP/scenario1_7_Alterations_SIP', function (req, res) {
      res.render('SIP/scenario1_7_Alterations_SIP',
                {'assetPath' : assetPath});

    });      

                app.get('/SIP/scenario1_8_Alterations_Check_SIP', function (req, res) {
      res.render('SIP/scenario1_8_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    }); 

                app.get('/SIP/scenario1_9_Summary_SIP', function (req, res) {
      res.render('SIP/scenario1_9_Summary_SIP',
                {'assetPath' : assetPath});

    }); 


             app.get('/SIP/scenario1_10_Confirmation_SIP', function (req, res) {
      res.render('SIP/scenario1_10_Confirmation_SIP',
                {'assetPath' : assetPath});

    }); 


// SIP End of Year Return Scenario 2

       app.get('/SIP/scenario2_0_Start_SIP', function (req, res) {
      res.render('SIP/scenario2_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP/scenario2_1_What_SIP', function (req, res) {
      res.render('SIP/scenario2_1_What_SIP',
                {'assetPath' : assetPath});

    });

               app.get('/SIP/scenario2_2_Check_SIP', function (req, res) {
      res.render('SIP/scenario2_2_Check_SIP',
                {'assetPath' : assetPath});

    });

                 app.get('/SIP/scenario2_3_Errors_SIP', function (req, res) {
      res.render('SIP/scenario2_3_Errors_SIP',
                {'assetPath' : assetPath});

    });

  app.get('/SIP/scenario2_4_Errors_SIP', function (req, res) {
      res.render('SIP/scenario2_4_Errors_SIP',
                {'assetPath' : assetPath});

    });


   

// SIP End of Year Return Scenario 3

       app.get('/SIP/scenario3_0_Start_SIP', function (req, res) {
      res.render('SIP/scenario3_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP/scenario3_1_What_SIP', function (req, res) {
      res.render('SIP/scenario3_1_What_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP/scenario3_2_Check_SIP', function (req, res) {
      res.render('SIP/scenario3_2_Check_SIP',
                {'assetPath' : assetPath});

    });

   app.get('/SIP/scenario3_3_Group_SIP', function (req, res) {
      res.render('SIP/scenario3_3_Group_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP/scenario3_4_Group_Details_SIP', function (req, res) {
      res.render('SIP/scenario3_4_Group_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario3_5_Group_Edit_SIP', function (req, res) {
      res.render('SIP/scenario3_5_Group_Edit_SIP',
                {'assetPath' : assetPath});

    });

         
             app.get('/SIP/scenario3_6_Trustee_Details_SIP', function (req, res) {
      res.render('SIP/scenario3_6_Trustee_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario3_7_Trustee_Edit_SIP', function (req, res) {
      res.render('SIP/scenario3_7_Trustee_Edit_SIP',
                {'assetPath' : assetPath});

    });

app.get('/SIP/scenario3_8_Alterations_SIP', function (req, res) {
      res.render('SIP/scenario3_8_Alterations_SIP',
                {'assetPath' : assetPath});

    });      

                app.get('/SIP/scenario3_9_Alterations_Check_SIP', function (req, res) {
      res.render('SIP/scenario3_9_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    }); 

                app.get('/SIP/scenario3_10_Summary_SIP', function (req, res) {
      res.render('SIP/scenario3_10_Summary_SIP',
                {'assetPath' : assetPath});

    }); 


             app.get('/SIP/scenario3_11_Confirmation_SIP', function (req, res) {
      res.render('SIP/scenario3_11_Confirmation_SIP',
                {'assetPath' : assetPath});

    }); 

    // SAYE End of Year Return Scenario 1

       app.get('/SAYE/scenario1_0_Start_SAYE', function (req, res) {
      res.render('SAYE/scenario1_0_Start_SAYE',
                {'assetPath' : assetPath});

    });

              app.get('/SAYE/scenario1_1_What_SAYE', function (req, res) {
      res.render('SAYE/scenario1_1_What_SAYE',
                {'assetPath' : assetPath});

    });

                          app.get('/SAYE/scenario1_2_Group_SAYE', function (req, res) {
      res.render('SAYE/scenario1_2_Group_SAYE',
                {'assetPath' : assetPath});

    });

          app.get('/SAYE/scenario1_3_Group_Details_SAYE', function (req, res) {
      res.render('SAYE/scenario1_3_Group_Details_SAYE',
                {'assetPath' : assetPath});

    });

            app.get('/SAYE/scenario1_4_Group_Edit_SAYE', function (req, res) {
      res.render('SAYE/scenario1_4_Group_Edit_SAYE',
                {'assetPath' : assetPath});

    });

         app.get('/SAYE/scenario1_5_Alterations_SAYE', function (req, res) {
      res.render('SAYE/scenario1_5_Alterations_SAYE',
                {'assetPath' : assetPath});

    });      

                app.get('/SAYE/scenario1_6_Alterations_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario1_6_Alterations_Check_SAYE',
                {'assetPath' : assetPath});

    }); 

                app.get('/SAYE/scenario1_7_Summary_SAYE', function (req, res) {
      res.render('SAYE/scenario1_7_Summary_SAYE',
                {'assetPath' : assetPath});

    }); 


             app.get('/SAYE/scenario1_8_Confirmation_SAYE', function (req, res) {
      res.render('SAYE/scenario1_8_Confirmation_SAYE',
                {'assetPath' : assetPath});

    }); 


// SAYE End of Year Return Scenario 2

       app.get('/SAYE/scenario2_0_Start_SAYE', function (req, res) {
      res.render('SAYE/scenario2_0_Start_SAYE',
                {'assetPath' : assetPath});

    });

              app.get('/SAYE/scenario2_1_What_SAYE', function (req, res) {
      res.render('SAYE/scenario2_1_What_SAYE',
                {'assetPath' : assetPath});

    });

               app.get('/SAYE/scenario2_2_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario2_2_Check_SAYE',
                {'assetPath' : assetPath});

    });

                 app.get('/SAYE/scenario2_3_Errors_SAYE', function (req, res) {
      res.render('SAYE/scenario2_3_Errors_SAYE',
                {'assetPath' : assetPath});

    });

  app.get('/SAYE/scenario2_4_Errors_SAYE', function (req, res) {
      res.render('SAYE/scenario2_4_Errors_SAYE',
                {'assetPath' : assetPath});

    });


   

// SAYE End of Year Return Scenario 3

       app.get('/SAYE/scenario3_0_Start_SAYE', function (req, res) {
      res.render('SAYE/scenario3_0_Start_SAYE',
                {'assetPath' : assetPath});

    });

              app.get('/SAYE/scenario3_1_What_SAYE', function (req, res) {
      res.render('SAYE/scenario3_1_What_SAYE',
                {'assetPath' : assetPath});

    });

          app.get('/SAYE/scenario3_2_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario3_2_Check_SAYE',
                {'assetPath' : assetPath});

    });

   app.get('/SAYE/scenario3_3_Group_SAYE', function (req, res) {
      res.render('SAYE/scenario3_3_Group_SAYE',
                {'assetPath' : assetPath});

    });

          app.get('/SAYE/scenario3_4_Group_Details_SAYE', function (req, res) {
      res.render('SAYE/scenario3_4_Group_Details_SAYE',
                {'assetPath' : assetPath});

    });

            app.get('/SAYE/scenario3_5_Group_Edit_SAYE', function (req, res) {
      res.render('SAYE/scenario3_5_Group_Edit_SAYE',
                {'assetPath' : assetPath});

    });

         
             app.get('/SAYE/scenario3_6_Alterations_SAYE', function (req, res) {
      res.render('SAYE/scenario3_6_Alterations_SAYE',
                {'assetPath' : assetPath});

    });

            app.get('/SAYE/scenario3_7_Alterations_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario3_7_Alterations_Check_SAYE',
                {'assetPath' : assetPath});

    });

app.get('/SAYE/scenario3_8_Summary_SAYE', function (req, res) {
      res.render('SAYE/scenario3_8_Summary_SAYE',
                {'assetPath' : assetPath});

    });      

                app.get('/SAYE/scenario3_9_Confirmation_SAYE', function (req, res) {
      res.render('SAYE/scenario3_9_Confirmation_SAYE',
                {'assetPath' : assetPath});

    }); 


 // OTHER End of Year Return Scenario 1
       app.get('/OTHER/scenario1_0_Start_OTHER', function (req, res) {
      res.render('OTHER/scenario1_0_Start_OTHER',
                {'assetPath' : assetPath});

    });

              app.get('/OTHER/scenario1_1_What_OTHER', function (req, res) {
      res.render('OTHER/scenario1_1_What_OTHER',
                {'assetPath' : assetPath});

    });

                          app.get('/OTHER/scenario1_2_Group_OTHER', function (req, res) {
      res.render('OTHER/scenario1_2_Group_OTHER',
                {'assetPath' : assetPath});

    });

          app.get('/OTHER/scenario1_3_Group_Details_OTHER', function (req, res) {
      res.render('OTHER/scenario1_3_Group_Details_OTHER',
                {'assetPath' : assetPath});

    });

            app.get('/OTHER/scenario1_4_Group_Edit_OTHER', function (req, res) {
      res.render('OTHER/scenario1_4_Group_Edit_OTHER',
                {'assetPath' : assetPath});

    });

    

                app.get('/OTHER/scenario1_5_Summary_OTHER', function (req, res) {
      res.render('OTHER/scenario1_5_Summary_OTHER',
                {'assetPath' : assetPath});

    }); 


             app.get('/OTHER/scenario1_6_Confirmation_OTHER', function (req, res) {
      res.render('OTHER/scenario1_6_Confirmation_OTHER',
                {'assetPath' : assetPath});

    }); 


// OTHER End of Year Return Scenario 2

       app.get('/OTHER/scenario2_0_Start_OTHER', function (req, res) {
      res.render('OTHER/scenario2_0_Start_OTHER',
                {'assetPath' : assetPath});

    });

              app.get('/OTHER/scenario2_1_What_OTHER', function (req, res) {
      res.render('OTHER/scenario2_1_What_OTHER',
                {'assetPath' : assetPath});

    });

               app.get('/OTHER/scenario2_2_Check_OTHER', function (req, res) {
      res.render('OTHER/scenario2_2_Check_OTHER',
                {'assetPath' : assetPath});

    });

                 app.get('/OTHER/scenario2_3_Errors_OTHER', function (req, res) {
      res.render('OTHER/scenario2_3_Errors_OTHER',
                {'assetPath' : assetPath});

    });

  app.get('/OTHER/scenario2_4_Errors_OTHER', function (req, res) {
      res.render('OTHER/scenario2_4_Errors_OTHER',
                {'assetPath' : assetPath});

    });


   

// OTHER End of Year Return Scenario 3

       app.get('/OTHER/scenario3_0_Start_OTHER', function (req, res) {
      res.render('OTHER/scenario3_0_Start_OTHER',
                {'assetPath' : assetPath});

    });

              app.get('/OTHER/scenario3_1_What_OTHER', function (req, res) {
      res.render('OTHER/scenario3_1_What_OTHER',
                {'assetPath' : assetPath});

    });

          app.get('/OTHER/scenario3_2_Check_OTHER', function (req, res) {
      res.render('OTHER/scenario3_2_Check_OTHER',
                {'assetPath' : assetPath});

    });

   app.get('/OTHER/scenario3_3_Group_OTHER', function (req, res) {
      res.render('OTHER/scenario3_3_Group_OTHER',
                {'assetPath' : assetPath});

    });

          app.get('/OTHER/scenario3_4_Group_Details_OTHER', function (req, res) {
      res.render('OTHER/scenario3_4_Group_Details_OTHER',
                {'assetPath' : assetPath});

    });

            app.get('/OTHER/scenario3_5_Group_Edit_OTHER', function (req, res) {
      res.render('OTHER/scenario3_5_Group_Edit_OTHER',
                {'assetPath' : assetPath});

    });

         


app.get('/OTHER/scenario3_6_Summary_OTHER', function (req, res) {
      res.render('OTHER/scenario3_6_Summary_OTHER',
                {'assetPath' : assetPath});

    });      

                app.get('/OTHER/scenario3_7_Confirmation_OTHER', function (req, res) {
      res.render('OTHER/scenario3_7_Confirmation_OTHER',
                {'assetPath' : assetPath});

    }); 


  // EMI End of Year Return Scenario 1
  
       app.get('/EMI/scenario1_0_Start_EMI', function (req, res) {
      res.render('EMI/scenario1_0_Start_EMI',
                {'assetPath' : assetPath});

    });

              app.get('/EMI/scenario1_1_What_EMI', function (req, res) {
      res.render('EMI/scenario1_1_What_EMI',
                {'assetPath' : assetPath});

    });

                          app.get('/EMI/scenario1_2_Group_EMI', function (req, res) {
      res.render('EMI/scenario1_2_Group_EMI',
                {'assetPath' : assetPath});

    });

          app.get('/EMI/scenario1_3_Group_Details_EMI', function (req, res) {
      res.render('EMI/scenario1_3_Group_Details_EMI',
                {'assetPath' : assetPath});

    });

            app.get('/EMI/scenario1_4_Group_Edit_EMI', function (req, res) {
      res.render('EMI/scenario1_4_Group_Edit_EMI',
                {'assetPath' : assetPath});

    });

    

                app.get('/EMI/scenario1_5_Summary_EMI', function (req, res) {
      res.render('EMI/scenario1_5_Summary_EMI',
                {'assetPath' : assetPath});

    }); 


             app.get('/EMI/scenario1_6_Confirmation_EMI', function (req, res) {
      res.render('EMI/scenario1_6_Confirmation_EMI',
                {'assetPath' : assetPath});

    }); 


// EMI End of Year Return Scenario 2

       app.get('/EMI/scenario2_0_Start_EMI', function (req, res) {
      res.render('EMI/scenario2_0_Start_EMI',
                {'assetPath' : assetPath});

    });

              app.get('/EMI/scenario2_1_What_EMI', function (req, res) {
      res.render('EMI/scenario2_1_What_EMI',
                {'assetPath' : assetPath});

    });

               app.get('/EMI/scenario2_2_Check_EMI', function (req, res) {
      res.render('EMI/scenario2_2_Check_EMI',
                {'assetPath' : assetPath});

    });

                 app.get('/EMI/scenario2_3_Errors_EMI', function (req, res) {
      res.render('EMI/scenario2_3_Errors_EMI',
                {'assetPath' : assetPath});

    });

  app.get('/EMI/scenario2_4_Errors_EMI', function (req, res) {
      res.render('EMI/scenario2_4_Errors_EMI',
                {'assetPath' : assetPath});

    });


   

// EMI End of Year Return Scenario 3

       app.get('/EMI/scenario3_0_Start_EMI', function (req, res) {
      res.render('EMI/scenario3_0_Start_EMI',
                {'assetPath' : assetPath});

    });

              app.get('/EMI/scenario3_1_What_EMI', function (req, res) {
      res.render('EMI/scenario3_1_What_EMI',
                {'assetPath' : assetPath});

    });

          app.get('/EMI/scenario3_2_Check_EMI', function (req, res) {
      res.render('EMI/scenario3_2_Check_EMI',
                {'assetPath' : assetPath});

    });

   app.get('/EMI/scenario3_3_Group_EMI', function (req, res) {
      res.render('EMI/scenario3_3_Group_EMI',
                {'assetPath' : assetPath});

    });

          app.get('/EMI/scenario3_4_Group_Details_EMI', function (req, res) {
      res.render('EMI/scenario3_4_Group_Details_EMI',
                {'assetPath' : assetPath});

    });

            app.get('/EMI/scenario3_5_Group_Edit_EMI', function (req, res) {
      res.render('EMI/scenario3_5_Group_Edit_EMI',
                {'assetPath' : assetPath});

    });

         


app.get('/EMI/scenario3_6_Summary_EMI', function (req, res) {
      res.render('EMI/scenario3_6_Summary_EMI',
                {'assetPath' : assetPath});

    });      

                app.get('/EMI/scenario3_7_Confirmation_EMI', function (req, res) {
      res.render('EMI/scenario3_7_Confirmation_EMI',
                {'assetPath' : assetPath});

    }); 

//TCR
                             app.get('/TCR/main_page', function (req, res) {
      res.render('TCR/main_page',
                {'assetPath' : assetPath});

    }); 


                       app.get('/TCR/notifications', function (req, res) {
      res.render('TCR/notifications',
                {'assetPath' : assetPath});

    }); 
                  app.get('/TCR/children', function (req, res) {
      res.render('TCR/children',
                {'assetPath' : assetPath});

    }); 

                                app.get('/TCR/children_amended', function (req, res) {
      res.render('TCR/children_amended',
                {'assetPath' : assetPath});

    }); 

                             app.get('/TCR/summary', function (req, res) {
      res.render('TCR/summary',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/summary_simple', function (req, res) {
      res.render('TCR/summary_simple',
                {'assetPath' : assetPath});

    });

     app.get('/TCR/new_child', function (req, res) {
      res.render('TCR/new_child',
                {'assetPath' : assetPath});

    }); 
  
  app.get('/TCR/new_child_summary', function (req, res) {
      res.render('TCR/new_child_summary',
                {'assetPath' : assetPath});

    }); 

  app.get('/TCR/main_pagev2', function (req, res) {
      res.render('TCR/main_pagev2',
                {'assetPath' : assetPath});

    }); 

  app.get('/TCR/main_pagev3', function (req, res) {
      res.render('TCR/main_pagev3',
                {'assetPath' : assetPath});

    }); 
 
 app.get('/TCR/main_pagev4', function (req, res) {
      res.render('TCR/main_pagev4',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/childrenv4', function (req, res) {
      res.render('TCR/childrenv4',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/new_childv4', function (req, res) {
      res.render('TCR/new_childv4',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/new_child_summaryv4', function (req, res) {
      res.render('TCR/new_child_summaryv4',
                {'assetPath' : assetPath});

    }); 

  app.get('/TCR/main_pagev4_amended', function (req, res) {
      res.render('TCR/main_pagev4_amended',
                {'assetPath' : assetPath});

    }); 

   app.get('/TCR/summary_simplev4', function (req, res) {
      res.render('TCR/summary_simplev4',
                {'assetPath' : assetPath});

    });

    }
};

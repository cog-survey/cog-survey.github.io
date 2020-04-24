$
    .material
    .init();


Survey
    .StylesManager
    .applyTheme("bootstrapmaterial");

//clearInvisibleValues: 'none'

var surveyJSON1 = {description:"<body>\n\n<h1> About the study </h1>\n<br><br>\n\n<h2>Dear participant,</h2>\n\n\n<p style=\"font-size:15px\"> \nThis study is a part of a Bachelor's thesis project in Cognitive Science, and examines the interest to share different types of data. The study is divided into two different conditions, and you will be randomly assigned one of the two. </P>\n\n<p>You will be asked to imagine a certain scenario and then make a decision. Based on your answer, you will be provided with different information. Estimate the statements based on how well they match your attitude towards the question, thus there are no right or wrong answers.\n\nThe study is voluntary and you have the option to stop whenever you feel like it and you will remain anonymous throughout the whole process. \n\n\n</p>\n\n\n</body>",pages:[{name:"page1",elements:[{type:"html",name:"question1",html:"<body>\n\n<h2>Dear participant,</h2> <br><br>\n<div class=\"seb\">\n<p style=\"font-size:15px\" >This study is a part of a Bachelor's thesis project in Cognitive Science, and examines the interest to share different types of data. The study is divided into two different conditions, and you will be randomly assigned one of the two. </p>\n\n<p style=\"font-size:15px\" > You will be asked to imagine a certain scenario and then make a decision. Based on your answer, you will be provided with different information. Estimate the statements based on how well they match your attitude towards the question, thus there are no right or wrong answers.</p>\n\n<p style=\"font-size:15px\" >The study is voluntary and you have the option to stop whenever you feel like it and you will remain anonymous throughout the whole process. </p>\n\n<p style=\"font-size:15px\" >Do you have any questions? Contact us on gussunliw@student.gu.se</p>\n\n</div>\n\n</body>"},{type:"checkbox",name:"question12",title:"Do we have your consent to participate?",isRequired:true,choices:[{value:"item1",text:"I accept"}]},{type:"radiogroup",name:"question4",title:"Where do you live?",isRequired:true,choices:[{value:"item1",text:"Sweden"},{value:"item2",text:"Other"}]},{type:"radiogroup",name:"question2",title:"Gender",isRequired:true,choices:[{value:"item1",text:"Male"},{value:"item2",text:"Female"},{value:"item3",text:"I prefer not to answer"}],otherText:"Dont want to tell"},{type:"text",name:"question6",title:"Age",isRequired:true,inputType:"number"}]},{name:"About",elements:[{type:"html",name:"question11",html:"<body> \n\n<h2> Sharing self-collected health data </h2>\n<div class=\"seb\">\n<p style=\"font-size:15px\" >Self-collected health data refers to the data that individuals themselves enter and measure with their smartphones or smartwatches. The use of different health apps has increased sharply in recent years and people share their data daily within digital communities.</p>   \n\n<p style=\"font-size:15px\">Each person is unique and thus requires tailored care. Access and greater insight to self-collected health data could make that possible. The data can be used for developing more individualized treatments and methods. It can also contribute to a more preventative way of working, which can lead to the discovery of serious diseases, such as cancer, at a much earlier stage than is possible today. It is, therefore, a crucial aspect for creating a health care system that strengthens and involves the individual's unique conditions.</p> \n\n<p style=\"font-size:15px\">Health authorities have specific laws when it comes to confidentiality and are therefore not allowed to share your data with others.  \n<br><br>The data will be used solely for research and will not be linked to you personally.</p>\n\n</div>\n\n</body>"},{type:"boolean",name:"boolean_share_data",title:"Do you want to share your health data? ",description:"Please note! Again, this is just an hypothetical question. \nThis does not mean you will share your data.",isRequired:true,labelTrue:"Yes",labelFalse:"No"}]},{name:"ShareYes1",elements:[{type:"matrix",name:"yes1",title:"You have chosen to share your health data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:[{value:"1",text:"1"},{value:"2",text:"2"},{value:"3",text:"3"},{value:"4",text:"4"},{value:"5",text:"5"},{value:"6",text:"6"},{value:"7",text:"7"}],rows:[{value:"1",text:"Because I want to be a part of making a change"},{value:"2",text:"Because I don’t give a shit"},{value:"3",text:"Because my conscience tells me to share my data"},{value:"4",text:"Because I’m supposed to share my data"},{value:"5",text:"Because I'm worried that people might judge me, if I didn’t share my data"},{value:"6",text:"Because I don't understand the meaning of it"},{value:"7",text:"Because sharing my data, gives me a higher purpose in life"},{value:"8",text:"Because it’s my personal decision"},{value:"9",text:"Because in retrospective I want to have done something good"},{value:"10",text:"Because I think that sharing my data is interesting"},{value:"11",text:"Because I think that sharing my data is pleasant "},{value:"12",text:"Because I have no opinion about it"}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = true"},{name:"ShareYes2",elements:[{type:"matrix",name:"yes2",title:"You have chosen to share your health data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:["1","2","3","4","5","6","7"],rows:[{value:"1",text:"Because sharing my data, adds value to my life"},{value:"2",text:"Because it doesn’t matter to me"},{value:"3",text:"Because I feel good when sharing my data "},{value:"4",text:"Because sharing my data, makes me feel that I’m part of something bigger than myself"},{value:"5",text:"Because sharing my data, makes me feel that I’m fulfilling my purpose in life"},{value:"6",text:"Because sharing my data, satisfies my desire to contribute "},{value:"7",text:"Because I might regret it, if I didn’t share my data "},{value:"8",text:"Because I would feel bad, if I didn’t share my data"},{value:"9",text:"Because I have no feelings about it"},{value:"10",text:"Because I don’t care"},{value:"11",text:"Because I would feel guilty, if I didn’t share my data"},{value:"12",text:"Because I don't have a choice "}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = true"},{name:"ShareYes3",elements:[{type:"matrix",name:"yes3",title:"You have chosen to share your health data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:["1","2","3","4","5","6","7"],rows:[{value:"1",text:"Because I believe that sharing my data is important for me"},{value:"2",text:"Because sharing my data, makes my life more meaningful"},{value:"3",text:"Because I think that sharing my data is good for me "},{value:"4",text:"Because I would be nervous, if I didn’t share my data"},{value:"5",text:"Because my friends would be disappointed with me, if I didn’t share my data"},{value:"6",text:"Because I’m doing it for my own good "},{value:"7",text:"Because I feel whatever about it"},{value:"8",text:"Because I think sharing my data is fun"},{value:"9",text:"Because I would feel anxious, if I didn’t share my data "},{value:"10",text:"Because I don’t know if this concerns me"},{value:"11",text:"Because sharing my data is something that I have to do"},{value:"12",text:"Because I feel that I have to share my data"}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = true"},{name:"ShareNo1",elements:[{type:"matrix",name:"no1",title:"You have chosen not to share your health data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:["1","2","3","4","5","6","7"],rows:[{value:"1",text:"Because I don’t believe that sharing my data contributes to making a change"},{value:"2",text:"Because I don't give a shit"},{value:"3",text:"Because my conscience tells me to not share my data"},{value:"4",text:"Because I’m not supposed to share my data "},{value:"5",text:"Because I'm worried that people might judge me"},{value:"6",text:"Because I don't understand the meaning of it"},{value:"7",text:"Because I don’t believe that sharing my data, would give me a higher purpose in life"},{value:"8",text:"Because it’s my personal decision"},{value:"9",text:"Because I don’t believe that sharing my data is something good"},{value:"10",text:"Because I don’t think that sharing my data is interesting"},{value:"11",text:"Because I don’t think that sharing my data is pleasant "},{value:"12",text:"Because I have no opinion about it"}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = false"},{name:"ShareNo2",elements:[{type:"matrix",name:"no2",title:"You have chosen not to share your health data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:["1","2","3","4","5","6","7"],rows:[{value:"1",text:"Because I don’t believe that sharing my data, would add value to my life"},{value:"2",text:"Because it doesn’t matter to me"},{value:"3",text:"Because I don’t feel good when sharing my data"},{value:"4",text:"Because I don’t believe that sharing my data, would make me feel that I’m part of something bigger than myself"},{value:"5",text:"Because I don’t believe that sharing my data, would make me feel that I’m fulfilling my purpose in life"},{value:"6",text:"Because I don’t believe that sharing my data, would satisfy my desire to contribute"},{value:"7",text:"Because I might regret it"},{value:"8",text:"Because I would feel bad"},{value:"9",text:"Because I have no feelings about it"},{value:"10",text:"Because I don’t care"},{value:"11",text:"Because I would feel guilty"},{value:"12",text:"Because I do have a choice"}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = false"},{name:"ShareNo3",elements:[{type:"matrix",name:"no3",title:"You have chosen not to share your health data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:["1","2","3","4","5","6","7"],rows:[{value:"1",text:"Because I don’t believe that sharing my data is important for me"},{value:"2",text:"Because I don’t believe that sharing my data, would make my life more meaningful"},{value:"3",text:"Because I don’t think that sharing my data is good for me "},{value:"4",text:"Because sharing my data, would make me nervous"},{value:"5",text:"Because my friends would be disappointed with me"},{value:"6",text:"Because I’m doing it for my own good "},{value:"7",text:"Because I feel whatever about it"},{value:"8",text:"Because I don’t think that sharing my data is fun"},{value:"9",text:"Because I would feel anxious"},{value:"10",text:"Because I don’t know if it concerns me"},{value:"11",text:"Because sharing my data is not something that I have to do"},{value:"12",text:"Because I don’t feel that I have to share my data"}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = false"},{name:"Calculate_profile",elements:[{type:"expression",name:"m1_calculate",visible:false,expression:"({yes1.1} + {yes1.7} + {yes1.9} + {yes2.1} + {yes2.4} + {yes2.5} + {yes2.6} + {yes3.1}) /8 + ({no1.1} + {no1.7} + {no1.9} + {no2.1} + {no2.4} + {no2.5} + {no2.6} + {no3.1}) / 8",commentText:"Other (describe)"},{type:"expression",name:"m2_calculate",visible:false,expression:"\r\n({yes1.10} + {yes1.11} + {yes2.3} + {yes3.8}) /4 + ({no1.10} + {no1.11} + {no2.3} + {no3.8}) / 4 ",commentText:"Other (describe)"},{type:"expression",name:"m3_calculate",visible:false,expression:"({yes1.8} + {yes3.1} + {yes3.3} + {yes3.6}) / 4 + ({no1.8} + {no3.1} + {no3.3} + {no3.6}) / 4",commentText:"Other (describe)"},{type:"expression",name:"m4_calculate",visible:false,expression:"({yes1.3} + {yes1.5} + {yes2.7} + {yes2.8} + {yes2.11} + {yes3.4} + {yes3.5} + {yes3.9}) / 8+ ({no1.3} + {no1.5} + {no2.7} + {no2.8} + {no2.11} + {no3.4} + {no3.5} + {no3.9}) /8",commentText:"Other (describe)"},{type:"expression",name:"m5_calculate",visible:false,expression:"({yes1.4} + {yes2.12} + {yes3.11} + {yes3.12}) / 4+ ({no1.4} + {no2.12} + {no3.11} + {no3.12})/ 4",commentText:"Other (describe)"},{type:"expression",name:"m6_calculate",visible:false,expression:"({yes1.2} + {yes1.6} + {yes1.12} + {yes2.2} + {yes2.9} + {yes2.10} + {yes3.7} + {yes3.10}) / 8+ ({no1.2} + {no1.6} + {no1.12} + {no2.2} + {no2.9} + {no2.10} + {no3.7} + {no3.10}) / 8",commentText:"Other (describe)"},{type:"expression",name:"m3_calculate_division",visible:false,expression:"({question1.3} + {question1.4} + {question2.3} + {question2.4}) / 4",commentText:"Other (describe)"},{type:"html",name:"m1_feedback",visibleIf:"({m1_calculate} >= {m2_calculate} and {m1_calculate} >= {m3_calculate} and {m1_calculate} >= {m4_calculate} and {m1_calculate} >= {m5_calculate} and {m1_calculate} >= {m6_calculate}) and {boolean_share_data}=false",html:"<body>\n\n<h2> Note! </h2>\n<p style='font-size:15px'>\nYou have indicated that you don’t believe that sharing data is something good or contributes to making a change. However, research in this area indicates that access to self-collected health data will make a huge difference for the future of healthcare and will save lives. \n</p>\n</body>"},{type:"html",name:"m2_feedback",visibleIf:"({m2_calculate} > {m1_calculate} and {m2_calculate} >= {m3_calculate} and {m2_calculate} >= {m4_calculate} and {m2_calculate} >= {m5_calculate} and {m2_calculate} >= {m6_calculate}) and {boolean_share_data}=false",html:"<body>\n\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\n\nYou have indicated that sharing your data isn’t something you find interesting or fun. However, research in this area indicates that access to self-collected health data will make a huge difference for the future of healthcare and will save lives.\n\n\n\n</p>\n</body>"},{type:"html",name:"m3_feedback",visibleIf:"({m3_calculate} > {m1_calculate} and {m3_calculate} > {m2_calculate} and {m3_calculate} >= {m4_calculate} and {m3_calculate} >= {m5_calculate} and {m3_calculate} >= {m6_calculate}) and {boolean_share_data}=false",titleLocation:"hidden",html:"<body>\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\nYou believe this decision is for your own good, but think of all the people you can help by sharing your self-collected health data. Research in this area indicates that access to self-collected health data will make a huge difference for the future of healthcare and will save lives.\n\n</p>\n</body>"},{type:"html",name:"m4_feedback",visibleIf:"({m4_calculate} > {m1_calculate} and {m4_calculate} > {m2_calculate} and {m4_calculate} > {m3_calculate} and {m4_calculate} >= {m5_calculate} and {m4_calculate} >= {m6_calculate}) and {boolean_share_data}=false",html:"<body>\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\nYou don’t seem to feel comfortable about sharing your self-collected health data, but think of all the people you can help if you do. Research in this area indicates that access to self-collected health data will make a huge difference for the future of healthcare and will save lives.\n\n</p>\n</body>"},{type:"html",name:"m5_feedback",visibleIf:"({m5_calculate} > {m1_calculate} and {m5_calculate} > {m2_calculate} and {m5_calculate} > {m3_calculate} and {m5_calculate} > {m4_calculate} and {m5_calculate} >= {m6_calculate}) and {boolean_share_data}=false",html:"<body>\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\nWhat if you would get $50 for sharing your data? \n\n\n</p>\n</body>"},{type:"html",name:"question7",visibleIf:"({m6_calculate} > {m1_calculate} and {m6_calculate} > {m2_calculate} and {m6_calculate} > {m3_calculate} and {m6_calculate} > {m4_calculate} and {m6_calculate} > {m5_calculate}) and {boolean_share_data}=false",html:"<body>\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\nIf it’s all the same to you, you could just as easily say yes as no. Given this, sharing your health data is important to others, so why not say yes? \n\n\n</p>\n</body>"},{type:"boolean",name:"share_data_again",visibleIf:"{boolean_share_data} = false",title:"Do you want to change your decision about sharing your data?",isRequired:true,labelTrue:"Yes",labelFalse:"No"}],visibleIf:"{boolean_share_data} = false"},{name:"false_false",elements:[{type:"comment",name:"question10",title:"What could potentially change your mind about sharing your self-collected health data?"}],visibleIf:"{boolean_share_data} = false and {share_data_again} = false"},{name:"email_request",elements:[{type:"comment",name:"question3",title:"Are you interested in receiving the full study when it is done?",description:"Please enter your e-mail:",validators:[{type:"email"}]}]}],showPrevButton:false}

var surveyJSON2 = {description:"<body>\n\n<h1> About the study </h1>\n<br><br>\n\n<h2>Dear participant,</h2>\n\n\n<p style=\"font-size:15px\"> \nThis study is a part of a Bachelor's thesis project in Cognitive Science, and examines the interest to share different types of data. The study is divided into two different conditions, and you will be randomly assigned one of the two. </P>\n\n<p>You will be asked to imagine a certain scenario and then make a decision. Based on your answer, you will be provided with different information. Estimate the statements based on how well they match your attitude towards the question, thus there are no right or wrong answers.\n\nThe study is voluntary and you have the option to stop whenever you feel like it and you will remain anonymous throughout the whole process. \n\n\n</p>\n\n\n</body>",pages:[{name:"page1",elements:[{type:"html",name:"wuestion",html:"<body>\n\n<h2>Dear participant,</h2> <br><br>\n\n<p style=\"font-size:15px\" >This study is a part of a Bachelor's thesis project in Cognitive Science, and examines the interest to share different types of data. The study is divided into two different conditions, and you will be randomly assigned one of the two. </p>\n\n<p style=\"font-size:15px\" > You will be asked to imagine a certain scenario and then make a decision. Based on your answer, you will be provided with different information. Estimate the statements based on how well they match your attitude towards the question, thus there are no right or wrong answers.</p>\n\n<p style=\"font-size:15px\" >The study is voluntary and you have the option to stop whenever you feel like it and you will remain anonymous throughout the whole process. </p>\n\n<p style=\"font-size:15px\" >Do you have any questions? Contact us on gussunliw@student.gu.se</p>\n\n</body>"},{type:"checkbox",name:"question8",title:"Do we have your consent to participate?",isRequired:true,choices:[{value:"item1",text:"I accept"}]},{type:"radiogroup",name:"question1",title:"Where do you live?",choices:[{value:"item1",text:"Sweden"},{value:"item2",text:"Other"}]},{type:"radiogroup",name:"question2",title:"Gender",isRequired:true,choices:[{value:"item1",text:"Male"},{value:"item2",text:"Female"},{value:"item3",text:"I prefer not to answer"}],otherText:"Dont want to tell"},{type:"text",name:"question6",title:"Age",isRequired:true,inputType:"number"}]},{name:"About",elements:[{type:"html",name:"question11",html:"<body> \n<div style=\"width=75%\">\n<h2> Sharing financial data </h2>\n\n<p style=\"font-size:15px\" >By financial data, we refer to all purchases made on your debit or credit card. Collecting financial data enables the mapping of consumer behavior in different contexts and situations. More insight about consumer behavior enables law enforcement agencies to predict criminal behavior and thereby reduce credit card frauds. <p/>\n\n<p style=\"font-size:15px\" >Law enforcement agencies have specific laws regarding confidentiality and are therefore not allowed to share your data with others. The data will be used solely for investigation purposes, and will not be linked to you personally. </p>\n\n<p style=\"font-size:15px\" >\nSharing your financial data can, therefore, have a great impact on the work to combat debit or credit card frauds. </p>\n\n\n\n\n\n</body>"},{type:"boolean",name:"boolean_share_data",title:"Do you want to share your finanical data? ",description:"Please note! Again, this is just an hypothetical question. \nThis does not mean you will share your data.",isRequired:true,labelTrue:"Yes",labelFalse:"No"}]},{name:"ShareYes1",elements:[{type:"matrix",name:"yes1",title:"You have chosen to share your financial data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:[{value:"1",text:"1"},{value:"2",text:"2"},{value:"3",text:"3"},{value:"4",text:"4"},{value:"5",text:"5"},{value:"6",text:"6"},{value:"7",text:"7"}],rows:[{value:"1",text:"Because I want to be a part of making a change"},{value:"2",text:"Because I don’t give a shit"},{value:"3",text:"Because my conscience tells me to share my data"},{value:"4",text:"Because I’m supposed to share my data"},{value:"5",text:"Because I'm worried that people might judge me, if I didn’t share my data"},{value:"6",text:"Because I don't understand the meaning of it"},{value:"7",text:"Because sharing my data, gives me a higher purpose in life"},{value:"8",text:"Because it’s my personal decision"},{value:"9",text:"Because in retrospective I want to have done something good"},{value:"10",text:"Because I think that sharing my data is interesting"},{value:"11",text:"Because I think that sharing my data is pleasant "},{value:"12",text:"Because I have no opinion about it"}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = true"},{name:"ShareYes2",elements:[{type:"matrix",name:"yes2",title:"You have chosen to share your financial data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:["1","2","3","4","5","6","7"],rows:[{value:"1",text:"Because sharing my data, adds value to my life"},{value:"2",text:"Because it doesn’t matter to me"},{value:"3",text:"Because I feel good when sharing my data "},{value:"4",text:"Because sharing my data, makes me feel that I’m part of something bigger than myself"},{value:"5",text:"Because sharing my data, makes me feel that I’m fulfilling my purpose in life"},{value:"6",text:"Because sharing my data, satisfies my desire to contribute "},{value:"7",text:"Because I might regret it, if I didn’t share my data "},{value:"8",text:"Because I would feel bad, if I didn’t share my data"},{value:"9",text:"Because I have no feelings about it"},{value:"10",text:"Because I don’t care"},{value:"11",text:"Because I would feel guilty, if I didn’t share my data"},{value:"12",text:"Because I don't have a choice "}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = true"},{name:"ShareYes3",elements:[{type:"matrix",name:"yes3",title:"You have chosen to share your financial data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:["1","2","3","4","5","6","7"],rows:[{value:"1",text:"Because I believe that sharing my data is important for me"},{value:"2",text:"Because sharing my data, makes my life more meaningful"},{value:"3",text:"Because I think that sharing my data is good for me "},{value:"4",text:"Because I would be nervous, if I didn’t share my data"},{value:"5",text:"Because my friends would be disappointed with me, if I didn’t share my data"},{value:"6",text:"Because I’m doing it for my own good "},{value:"7",text:"Because I feel whatever about it"},{value:"8",text:"Because I think sharing my data is fun"},{value:"9",text:"Because I would feel anxious, if I didn’t share my data "},{value:"10",text:"Because I don’t know if it concerns me"},{value:"11",text:"Because sharing my data is something that I have to do"},{value:"12",text:"Because I feel that I have to share my data"}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = true"},{name:"ShareNo1",elements:[{type:"matrix",name:"no1",title:"You have chosen not to share your financial data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:["1","2","3","4","5","6","7"],rows:[{value:"1",text:"Because I don’t believe that sharing my data contributes to making a change"},{value:"2",text:"Because I don’t give a shit"},{value:"3",text:"Because my conscience tells me to not share my data"},{value:"4",text:"Because I’m not supposed to share my data "},{value:"5",text:"Because I'm worried that people might judge me"},{value:"6",text:"Because I don't understand the meaning of it"},{value:"7",text:"Because I don’t believe that sharing my data, would give me a higher purpose in life"},{value:"8",text:"Because it’s my personal decision"},{value:"9",text:"Because I don’t believe that sharing my data is something good"},{value:"10",text:"Because I don’t think that sharing my data is interesting"},{value:"11",text:"Because I don’t think that sharing my data is pleasant "},{value:"12",text:"Because I have no opinion about it"}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = false"},{name:"ShareNo2",elements:[{type:"matrix",name:"no2",title:"You have chosen not to share your financial data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:["1","2","3","4","5","6","7"],rows:[{value:"1",text:"Because I don’t believe that sharing my data, would add value to my life"},{value:"2",text:"Because it doesn’t matter to me"},{value:"3",text:"Because I don’t feel good when sharing my data"},{value:"4",text:"Because I don’t believe that sharing my data, would make me feel that I’m part of something bigger than myself"},{value:"5",text:"Because I don’t believe that sharing my data, would make me feel that I’m fulfilling my purpose in life"},{value:"6",text:"Because I don’t believe that sharing my data, would satisfy my desire to contribute"},{value:"7",text:"Because I might regret it"},{value:"8",text:"Because I would feel bad"},{value:"9",text:"Because I have no feelings about it"},{value:"10",text:"Because I don’t care"},{value:"11",text:"Because I would feel guilty"},{value:"12",text:"Because I do have a choice"}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = false"},{name:"ShareNo3",elements:[{type:"matrix",name:"no3",title:"You have chosen not to share your financial data, why is that?",description:"Estimate the statements based on how well they match your attitude towards the question.\n1 refers to “Strongly disagree” and 7 refers to “Strongly agree”. ",isRequired:true,columns:["1","2","3","4","5","6","7"],rows:[{value:"1",text:"Because I don’t believe that sharing my data is important for me"},{value:"2",text:"Because I don’t believe that sharing my data, would make my life more meaningful"},{value:"3",text:"Because I don’t think that sharing my data is good for me "},{value:"4",text:"Because sharing my data, would make me nervous"},{value:"5",text:"Because my friends would be disappointed with me"},{value:"6",text:"Because I’m doing it for my own good "},{value:"7",text:"Because I feel whatever about it"},{value:"8",text:"Because I don’t think that sharing my data is fun"},{value:"9",text:"Because I would feel anxious"},{value:"10",text:"Because I don’t know if it concerns me"},{value:"11",text:"Because sharing my data is not something that I have to do"},{value:"12",text:"Because I don’t feel that I have to share my data"}],isAllRowRequired:true}],visibleIf:"{boolean_share_data} = false"},{name:"Calculate_profile",elements:[{type:"expression",name:"m1_calculate",visible:false,expression:"({yes1.1} + {yes1.7} + {yes1.9} + {yes2.1} + {yes2.4} + {yes2.5} + {yes2.6} + {yes3.1}) /8 + ({no1.1} + {no1.7} + {no1.9} + {no2.1} + {no2.4} + {no2.5} + {no2.6} + {no3.1}) / 8",commentText:"Other (describe)"},{type:"expression",name:"m2_calculate",visible:false,expression:"\r\n({yes1.10} + {yes1.11} + {yes2.3} + {yes3.8}) /4 + ({no1.10} + {no1.11} + {no2.3} + {no3.8}) / 4 ",commentText:"Other (describe)"},{type:"expression",name:"m3_calculate",visible:false,expression:"({yes1.8} + {yes3.1} + {yes3.3} + {yes3.6}) / 4 + ({no1.8} + {no3.1} + {no3.3} + {no3.6}) / 4",commentText:"Other (describe)"},{type:"expression",name:"m4_calculate",visible:false,expression:"({yes1.3} + {yes1.5} + {yes2.7} + {yes2.8} + {yes2.11} + {yes3.4} + {yes3.5} + {yes3.9}) / 8+ ({no1.3} + {no1.5} + {no2.7} + {no2.8} + {no2.11} + {no3.4} + {no3.5} + {no3.9}) /8",commentText:"Other (describe)"},{type:"expression",name:"m5_calculate",visible:false,expression:"({yes1.4} + {yes2.12} + {yes3.11} + {yes3.12}) / 4+ ({no1.4} + {no2.12} + {no3.11} + {no3.12})/ 4",commentText:"Other (describe)"},{type:"expression",name:"m6_calculate",visible:false,expression:"({yes1.2} + {yes1.6} + {yes1.12} + {yes2.2} + {yes2.9} + {yes2.10} + {yes3.7} + {yes3.10}) / 8+ ({no1.2} + {no1.6} + {no1.12} + {no2.2} + {no2.9} + {no2.10} + {no3.7} + {no3.10}) / 8",commentText:"Other (describe)"},{type:"expression",name:"m3_calculate_division",visible:false,expression:"({question1.3} + {question1.4} + {question2.3} + {question2.4}) / 4",commentText:"Other (describe)"},{type:"html",name:"question3",visibleIf:"{m1_calculate} > {m2_calculate}",html:"<html>\n<body>\n<h1></h1>\n<br>\n\n</body>\n</html>"},{type:"html",name:"m1_feedback",visibleIf:" ({m1_calculate} >= {m2_calculate} and {m1_calculate} >= {m3_calculate} and {m1_calculate} >= {m4_calculate} and {m1_calculate} >= {m5_calculate} and {m1_calculate} >= {m6_calculate}) and {boolean_share_data}=false",html:"<body>\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\n\nYou have indicated that you don’t believe that sharing data is something good or contributes to making a change. However, research in this area indicates that access to financial data enables law enforcement agencies to predict criminal behavior and thereby reduce credit or debit card frauds. \n\n</p>\n</body>"},{type:"html",name:"m2_feedback",visibleIf:"({m2_calculate} > {m1_calculate} and {m2_calculate} >= {m3_calculate} and {m2_calculate} >= {m4_calculate} and {m2_calculate} >= {m5_calculate} and {m2_calculate} >= {m6_calculate}) and {boolean_share_data}=false",html:"<body>\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\nYou have indicated that sharing your data isn’t something you find interesting or fun. However, research in this area indicates that access to financial data enables law enforcement agencies to predict criminal behavior and thereby reduce credit or debit card frauds. \n\n</p>\n</body>"},{type:"html",name:"m3_feedback",visibleIf:"({m3_calculate} > {m1_calculate} and {m3_calculate} > {m2_calculate} and {m3_calculate} >= {m4_calculate} and {m3_calculate} >= {m5_calculate} and {m3_calculate} >= {m6_calculate}) and {boolean_share_data}=false",html:"<body>\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\nYou believe this decision is for your own good, but think of all the people you can help by sharing your financial data. Research in this area indicates that access to financial data enables law enforcement agencies to predict criminal behavior and thereby reduce credit or debit card frauds. \n\n</p>\n</body>"},{type:"html",name:"m4_feedback",visibleIf:"({m4_calculate} > {m1_calculate} and {m4_calculate} > {m2_calculate} and {m4_calculate} > {m3_calculate} and {m4_calculate} >= {m5_calculate} and {m4_calculate} >= {m6_calculate}) and {boolean_share_data}=false",html:"<body>\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\n\nYou don’t seem to feel comfortable about sharing your financial data, but think of all the people you can help if you do. Research in this area indicates that access to financial data enables law enforcement agencies to predict criminal behavior and thereby reduce credit or debit card frauds. \n\n</p>\n</body>"},{type:"html",name:"m5_feedback",visibleIf:"({m5_calculate} > {m1_calculate} and {m5_calculate} > {m2_calculate} and {m5_calculate} > {m3_calculate} and {m5_calculate} > {m4_calculate} and {m5_calculate} >= {m6_calculate}) and {boolean_share_data}=false",html:"<body>\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\nWhat if we would give you 50$ for sharing your data?\n\n</p>\n</body>"},{type:"html",name:"question7",visibleIf:"({m6_calculate} > {m1_calculate} and {m6_calculate} > {m2_calculate} and {m6_calculate} > {m3_calculate} and {m6_calculate} > {m4_calculate} and {m6_calculate} > {m5_calculate}) and {boolean_share_data}=false",html:"<body>\n<h2>Note!</h2>\n<p style='font-size:15px'>\n\n\nIf it’s all the same to you, you could just as easily say yes as no. Given this, sharing your financial data is important to others, so why not say yes?\n\n</p>\n</body>"},{type:"boolean",name:"share_data_again",visibleIf:"{boolean_share_data} = false",title:"Do you want to change your decision about sharing your data?",isRequired:true,labelTrue:"Yes",labelFalse:"No"}],visibleIf:"{boolean_share_data} = false"},{name:"false_false",elements:[{type:"comment",name:"question4",title:"What could potentially change your mind about sharing your financial data?"}],visibleIf:"{boolean_share_data} = false and {share_data_again} = false"},{name:"email_request",elements:[{type:"comment",name:"question5",title:"Are you interested in recieving the full study when it is done? ",description:"Please enter you e-mail:", validators:[{type:"email"}]}]}],showPrevButton:false}

//validators:[{type:"email"}]}]}],showPrevButton:false}

//validators:[{type:"email"}]
//'6ff1f879-ae9c-4177-acb5-12fcb9778e21'

const surveyNumber = Math.random() < 0.5 ? 1 : 0
let surveyJson = '';
let surveyId = '';


if(surveyNumber === 0){
    surveyJson = surveyJSON1;
    surveyId = 'b073c437-4291-41d2-bba3-de9a32c9f249';
}else{
    surveyJson = surveyJSON2;
    surveyId = '6ff1f879-ae9c-4177-acb5-12fcb9778e21';
}

surveyJson['clearInvisibleValues'] = 'none';

window.survey = new Survey.Model(surveyJson);
survey.showQuestionNumbers = "off";
survey
    .onComplete
    .add(function (result) {
        survey.sendResult(surveyId);
        
    });

$("#surveyElement").Survey({model: survey});
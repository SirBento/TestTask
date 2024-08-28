const style = {

  //CARDS

/** BenefitsCard */
benefitsCardbg: "shadow-lg rounded-xl p-5 bg-secondary w-full md:w-[340px] hover:bg-hoverbg",
benefitsCardBorder: "flex w-full md:mr-2 flex-row justify-center items-center border-b border-borderBlue",
benefitsCardIcon: "h-[22px] w-[26px] text-blue ml-7",
benefitsCardSpan: "-mt-3 md:-mt-3 md:ml-2 ml-2",
benefitsCardDescription: "text-start mt-6 text-textWhite font-thin text-[14px] md:text-[16px]",


/** GettingStartedCard **/
GettingStartedCardbg: "rounded-lg py-2 px-4 md:px-6",
GettingStartedCardBorder: "flex w-full md:mr-2 flex-row justify-center items-center border-b border-borderBlue",
GettingStartedCardIcon: "h-[20px] w-[26px] text-blue ml-2",
GettingStartedCardSpan: "-mt-3 md:-mt-3 md:ml-2 ml-2",
GettingStartedCardRightOultine: "h-[20px] w-[20px] text-gray-400 hover:text-text",



/** TestimonyCard */

TestimonyCardbg: "rounded-lg p-8 gap-2 hover:bg-hoverbg mt-10",
TestimonyCardBorder: "flex items-center justify-between border-b border-textBlue pb-4",
TestimonyCardTitle: "text-[16px] md:text-[18px] font-bold text-textWhite",
TestimonyCardText: "text-start mt-6 leading-5 text-textWhite font-thin w-full md:w-[356px]",
TestimonyCardIcon: "border rounded-full p-4 h-[70px] w-[70px] flex justify-center items-center",
TestimonyCarddForwardOultine: "text-textRed hover:text-gray-300 cursor-pointer mt-3",


/** UseCaseDropDownCard */
UseCaseDropdownCardBroder: "border-b border-dimBlue last:border-b-0 pb-4 md:w-[1080px] sm:w-[700px] lg:w-[1000px] w-6/6",
UseCaseDropdownCardTitle: "text-[14px] md:text-[16px] font-medium font-poppins hover:text-textBlue",
UseCaseDropdownCardContent: "flex text-[14px] md:text-[16px] font-light font-poppins w-full md:w-[730px] w-full text-start text-textWhite",
UseCaseDropdownCardContentWrapper: "flex items-start flex-col md:flex-row justify-between",


/** UseCaseDropDownTabCard */
UseCaseDropdownTabCardbg: "bg-primary rounded-b-lg p-4 w-full ",
UseCaseDropdownTabCardImg: "w-full h-40 object-cover rounded-t-lg",
UseCaseDropdownTabCardContent: "text-textWhite font-poppins font-thin text-[14px] sm:text-[14px] md:text-[16px] text-left sm:text-center md:text-left ",
UseCaseDropdownTabCardBorder: "border-b border-borderBlue pb-1 mb-2",
UseCaseDropdownTabCardTitle: "text-[18px] md:text-[20px] font-poppins font-bold",
UseCaseDropdownTabCardWrapper: "flex justify-between items-center text-center",

// SECTIONS

/** useCaseTabSection */
useCaseTabSectionbg: "bg-primary text-white p-8 rounded-3xl",
useCaseTabSectionLink: "text-textBlue flex items-center hover:underline font-poppins font-thin sm:text-[10px] md:text-[16px]",
useCaseTabSectionWrapper: "max-w-5xl mx-auto",
useCaseTabSectionCardWrapper: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 mt-6",


//COMPONENTS


/** Navbar **/
navbarContainer: "text-textWhite fixed top-0 left-0 right-0 z-10 py-4 md:px-0 lg:px-0 px-8",
navbarWrapper: "container mx-auto flex justify-between items-center h-20 p-2",
navbarIconWrapper: "flex items-center",
navbarLogo: "w-12 h-12 mr-2 rounded-full",
navbarLogoText: "font-poppins md:text-[22px] text-[18px] font-medium",
navbarLogout: "text-textBlueSecond bg-primary border border-textBlue rounded-xl py-2 px-7 hover:bg-textBlue hover:text-white font-poppins h-[44px] flex items-center gap-2",
navbarButtonWrapper: "flex items-center space-x-2 lg:space-x-6 md:space-x-4",
navbarLoginButton: "text-textBlueSecond bg-primary border border-textBlue rounded-xl py-2 px-7 hover:bg-textBlue hover:text-white font-poppins h-[44px] flex items-center gap-2",
navbarButtonText: "text-[14px] md:text-[16px] font-poppins",
navbarSignupButon: "text-white bg-textBlue border border-textBlue rounded-xl py-2 px-7 hover:bg-hoverbg hover:text-textWhite font-poppins h-[44px] flex items-center gap-1",
  



  


  /** Getting Started **/
gettingStatedWrapper: "flex flex-col justify-center items-center overflow-hidden mt-10 w-full px-4 md:px-0",
gettingStatedText: "w-full md:w-[420px] text-center mt-5 font-light leading-7 text-[16px] sm:text-[18px]",
gettingStatedCardWrapper: "flex flex-col justify-between md:flex-row gap-[18px] mt-9 w-full p-2",


/** Hero **/
heroWrapper: "relative w-full h-[600px] rounded-3xl overflow-hidden mt-20 md:h-[500px] sm:h-[400px]",
heroGradient: "absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.7)]",
heroImagebg: "absolute inset-0 bg-[url('src/assets/hero.jpg')] bg-no-repeat bg-cover object-cover",
heroContentWrapper: "absolute inset-0 flex flex-col justify-end items-start text-white z-10 w-full max-w-[640px] mb-10 pl-10 pr-5",
heroTextWrapper: "w-full max-w-[540px] text-left",
heroHeadingText: "md:text-[45px] font-bold md:mb-4 text-[32px] sm:text-[24px]",
heroDescription: "text-[16px] mb-8 leading-6 text-[14px] sm:text-[15px]",
heroButtonWrapper: "flex flex-col sm:flex-row sm:gap-2 gap-3",


//Learn More button
heroLearnMoreButton:" flex items-center justify-center text-dimBlue lg:inline-block bg-lightBlue rounded-xl py-3 px-7 hover:bg-textBlueSecond hover:text-black font-poppins h-[46px] ml-3 font-medium",
heroLearnMoreButtonBorder:"flex items-center justify-between flex-row font-poppins text-borderBlue",
heroLearnMoreButtonText: "ml-2 text-[14px] mr-1 font-poppins font-thin",

//Contacts Button
heroContactsButton: " flex items-center justify-center lg:inline-block hover:text-black font-poppins h-[46px] ml-3 font-medium bg-transparent hover:bg-borderBlue text-white py-3 px-6 rounded-lg border items-center justify-center",
heroContactsButtonText: "ml-2 text-[14px] mr-1 font-poppins text-center",




/** UseCases **/
useCasesbg: "bg-secondary flex flex-col justify-center items-center rounded-3xl mt-10 p-4 md:p-8",
useCasesRedText: "text-textRed font-poppins text-[14px] md:text-[16px] mt-5 font-medium",
useCasesDescriptionText: "w-full md:w-[420px] text-center mt-6 font-light leading-7 text-[14px] sm:text-[16px]",



/**Benefits */
benefitsWrapper: "flex flex-col md:flex-row gap-[16px] mt-9 w-full px-4 md:px-0",


/** Testimonials **/
testimonialsWrapper: "flex flex-col justify-center items-center mt-12 px-4 md:px-0",
testimonialsText: "w-full md:w-[320px] text-center leading-7 mt-4 text-[14px] md:text-[16px]",
testimonialsCardWrapper: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px]",




/** ReadyToGrow **/
ReadyToGrowContainer: "relative w-full h-[400px] md:h-[400px] rounded-3xl overflow-hidden mt-16",
ReadyToGrowImageGradient: "absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.7)] bg-no-repeat bg-cover",
ReadyToGrowComponentsContainer: "absolute inset-0 flex flex-col justify-center items-center z-10",
ReadyToGrowHeaderText: "text-3xl md:text-4xl font-bold mb-4 text-white mt-6",
ReadyToGrowDescription: "text-[14px] md:text-[16px] font-poppins w-[280px] md:w-[320px] mb-8 text-white text-center",
ReadyToGrowButton: "text-textWhite lg:inline-block bg-dimBlue rounded-lg py-3 px-7 hover:bg-textBlue hover:text-dimBlue font-poppins h-[46px] ml-3 font-medium",
ReadyToGrowButtonTextWrapper: "flex items-center justify-between flex-row font-poppins text-blue hover:text-dimBlue",
ReadyToGrowButtonText: "ml-2 text-[14px] md:text-[16px] mr-1 font-poppins",



  /** SocialMediaLinks **/
  SocialMediaLinksContainer: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-10 mb-10 justify-center items-center px-4 md:px-0",
  SocialMediaLinksWrapper: "flex flex-col items-center justify-center",
  SocialMediaLinksIconWrapper: "bg-white rounded-full p-4",
  SocialMediaLinksIcon: "h-[36px] w-[36px] text-primary",
  SocialMediaLinksDescription: "mt-2 text-textWhite font-thin font-poppins text-[14px] md:text-[16px] w-full md:w-[230px] text-center",




 /** Footer **/
footerWraper: "py-4 left-0 right-0 z-10 h-16 text-textWhite p-4 flex justify-between items-center text-[12px] sm:text-[14px] bottom-0 fixed font-poppins font-thin relative",
footerBorder: "border-t border-borderBlue flex flex-col sm:flex-row justify-between items-center z-0",
footerBorderWrapper: "max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-0 z-0 relative",
footerLinkWrapper: "flex items-center space-x-4 mb-2 sm:mb-0 mt-5",






  //PAGES


 /** RistrationSucess **/
RistrationSucessContainer: "flex flex-col gap-10 px-4 md:px-0",
RistrationSucessLottie: "flex flex-col items-center justify-center gap-1",
RistrationSucessTextWrapper: "flex flex-col items-center justify-center text-center",


  /** Signin **/
  SigninPasswordVisibility: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none",


  
  /** SignUp **/
  SignUpSectionHeadingText: "text-left ml-3 -mb-2 font-bold", 
  SignUpSectionHeadingTextConatct:"text-left ml-3 -mb-2 font-bold mt-6",
  SignUpSectionHeadingTextOrg:"text-left ml-3 -mb-2 font-bold mt-6",
  SignUpGenderSelelctor: "appearance-none border border-borderBlue rounded-lg w-full py-4 px-3 text-white focus:outline-none focus:ring-2 focus:ring-borderBlueSecond bg-transparent hover:border-borderBlueSecond font-poppins text-[16px] h-[56px]",
  SignUpDatePicker:"text-left items-start w-full justify-start",
  




headings: "text-[28px] md:text-[32px] font-bold text-center pb-10 pt-4 text-white font-poppins",

headings2: "text-[36px] font-bold text-center pt-4 text-textBlue font-poppins",

form: "container mx-auto max-w-xl p-8 border border-borderBlue rounded-3xl shadow-md w-full md:w-3/4 lg:w-2/3 justify-center items-center mb-12 mt-5",

inputs: "border border-borderBlue rounded-lg w-full py-4 px-3 text-white focus:outline-none focus:shadow-outline bg-primary hover:border-borderBlueSecond font-poppins text-[14px] h-[56px]",

inputLables: "text-textWhite font-poppins text-[11px] block text-left absolute top-0 left-6 -mt-2 -ml-2 z-10",

samllText: "text-textWhite font-poppins text-[14px]",

smallTextBlue: "text-textBlue font-poppins text-[14px] hover:text-gray-600 flex justify-between items-center",

lgText: "text-white font-poppins text-[18px] font-bold",

otpTextOne: "text-textWhite font-poppins text-[14px] block text-left ml-2 mb-4 font-bold",

otpTextTwo: "text-textWhite font-poppins text-[10px] block text-left ml-2 mt-2",

linkHover: "hover:text-borderBlueSecond hover:underline",

authButtons: "bg-textBlueSecond hover:bg-textBlue text-white font-poppins py-2 px-4 focus:outline-none focus:shadow-outline text-[14px] h-[56px] w-full rounded-lg",

successButton: "bg-textBlueSecond hover:bg-textBlue text-white font-poppins py-4 px-4 focus:outline-none focus:shadow-outline text-[14px] h-[56px] w-full rounded-lg text-center justify-center",

forgotPass: "text-textBlueThird hover:underline text-sm font-poppins text-[16px]",

links: "text-textBlueThird hover:underline text-[14px]",


}


export default style;






import {FormupReducer} from './Formup.reducer'
import {combineReducers} from 'redux'
import { ContactReducer } from './Contact.reducer'
import { InquiryReducer } from './Inquiry.reducer'
import { AboutReducer } from './About.reducer'
import { SuggestReducer } from './Suggestion.reducer'
import { LunchReducer } from './Lunch.reducer'
import { SignupReducer } from './Signup.reducer'
import { serviceReducer } from './Service.reducer'
import { childReducer } from './childRegister.reducer'
import { LoginReducer } from './login.reducer'
import { NoticeReducer } from './Notice.reducer'
import { ForgotReducer } from './Forgot.reducer'
import { GalleryReducer } from './Gallery.reducer'
import { PloginReducer } from './Plogin.reducer'
import { PforgotReducer } from './Pforgot.reducer'
import {PaymentReducer} from './Payment.reducer'

export * from './Formup.reducer'
export * from './Contact.reducer'
export * from './Inquiry.reducer'
export * from './About.reducer'
export * from './Notice.reducer'
export * from './Suggestion.reducer'
export * from './Lunch.reducer'
export * from './Signup.reducer' 
export * from './login.reducer'
export * from './Service.reducer'
export * from './Lunch.reducer'
export * from './Forgot.reducer'
export * from './Gallery.reducer'
export * from './Plogin.reducer'
export * from './Gallery.reducer'
export * from './Pforgot.reducer'
export * from './Payment.reducer'

export const rootReducer=combineReducers({
    createFormup:FormupReducer,
    createContact:ContactReducer,
    createInquiry:InquiryReducer,
    createAbout:AboutReducer,
    CreateSuggestion:SuggestReducer,
    CreateLunch:LunchReducer,
    createSignup:SignupReducer,
    createService:serviceReducer,
    createChild:childReducer,
    createLogin:LoginReducer,
    createNotice:NoticeReducer,
    createForgot:ForgotReducer,
    CreateGallery:GalleryReducer,
    createPlogin:PloginReducer,
    createPforgot:PforgotReducer,
    CratePayment:PaymentReducer
 })
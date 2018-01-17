import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
//need to create new object
var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".members"),"60%");
// var revealOnScroll = new RevealOnScroll();
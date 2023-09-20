import React from 'react'
import ReactDOM from 'react-dom/client'

import Headers from './Components/Header'
import Body from './Components/Body'



// const restaurantList=[
//     {
//     "info": {
//     "id": "55054",
//     "name": "Reddy's Gokul Brindavan Restaurant",
//     "cloudinaryImageId": "fogfnatzbqcn5nytgb7e",
//     "locality": "Laxminagar",
//     "areaName": "Dharampeth",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//     "South Indian",
//     "Beverages"
//     ],
//     "avgRating": 4.6,
//     "veg": true,
//     "feeDetails": {
//     "restaurantId": "55054",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2900
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2900
//     },
//     "parentId": "168579",
//     "avgRatingString": "4.6",
//     "totalRatingsString": "10K+",
//     "sla": {
//     "deliveryTime": 28,
//     "lastMileTravel": 3.5,
//     "serviceability": "SERVICEABLE",
//     "slaString": "28 mins",
//     "lastMileTravelString": "3.5 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 22:30:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {},
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/reddys-gokul-brindavan-restaurant-laxminagar-dharampeth-nagpur-55054",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "52547",
//     "name": "Subway",
//     "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
//     "locality": "Dharampeth",
//     "areaName": "Dharampeth",
//     "costForTwo": "₹350 for two",
//     "cuisines": [
//     "Healthy Food",
//     "Salads",
//     "Snacks",
//     "Desserts",
//     "Beverages"
//     ],
//     "avgRating": 4.2,
//     "feeDetails": {
//     "restaurantId": "52547",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2900
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2900
//     },
//     "parentId": "2",
//     "avgRatingString": "4.2",
//     "totalRatingsString": "5K+",
//     "sla": {
//     "deliveryTime": 26,
//     "lastMileTravel": 3.8,
//     "serviceability": "SERVICEABLE",
//     "slaString": "26 mins",
//     "lastMileTravelString": "3.8 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-17 00:00:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {},
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/subway-dharampeth-nagpur-52547",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "53422",
//     "name": "Sweet Truth - Cake and Desserts",
//     "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
//     "locality": "Mohan Nagar",
//     "areaName": "Sadar",
//     "costForTwo": "₹450 for two",
//     "cuisines": [
//     "Snacks",
//     "Bakery",
//     "Desserts",
//     "Beverages"
//     ],
//     "avgRating": 4.2,
//     "feeDetails": {
//     "restaurantId": "53422",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2400
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2400
//     },
//     "parentId": "4444",
//     "avgRatingString": "4.2",
//     "totalRatingsString": "1K+",
//     "sla": {
//     "deliveryTime": 17,
//     "lastMileTravel": 2.4,
//     "serviceability": "SERVICEABLE",
//     "slaString": "17 mins",
//     "lastMileTravelString": "2.4 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 23:59:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "aggregatedDiscountInfoV3": {
//     "header": "₹125 OFF",
//     "subHeader": "ABOVE ₹399",
//     "discountTag": "FLAT DEAL"
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-mohan-nagar-sadar-nagpur-53422",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "76405",
//     "name": "Cafe Coffee Day",
//     "cloudinaryImageId": "wkmvkwahhfcvaudaklep",
//     "locality": "Futala Road",
//     "areaName": "Civil Lines",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//     "Beverages",
//     "Cafe",
//     "Snacks",
//     "Desserts",
//     "Burgers",
//     "Ice Cream",
//     "Bakery",
//     "Fast Food"
//     ],
//     "avgRating": 4,
//     "feeDetails": {
//     "restaurantId": "76405",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2400
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2400
//     },
//     "parentId": "1",
//     "avgRatingString": "4.0",
//     "totalRatingsString": "500+",
//     "sla": {
//     "deliveryTime": 23,
//     "lastMileTravel": 2.1,
//     "serviceability": "SERVICEABLE",
//     "slaString": "23 mins",
//     "lastMileTravelString": "2.1 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 23:30:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "aggregatedDiscountInfoV3": {
//     "header": "50% OFF",
//     "subHeader": "UPTO ₹100"
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-futala-road-civil-lines-nagpur-76405",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "53484",
//     "name": "Haldiram's Restaurant",
//     "cloudinaryImageId": "c058b951bd917bf716630dff74648a5d",
//     "locality": "Sitabuldi",
//     "areaName": "Sitabuldi",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//     "North Indian",
//     "South Indian",
//     "Sweets",
//     "Desserts",
//     "Chaat"
//     ],
//     "avgRating": 4.2,
//     "feeDetails": {
//     "restaurantId": "53484",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2400
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2400
//     },
//     "parentId": "351771",
//     "avgRatingString": "4.2",
//     "totalRatingsString": "10K+",
//     "sla": {
//     "deliveryTime": 26,
//     "lastMileTravel": 1.4,
//     "serviceability": "SERVICEABLE",
//     "slaString": "26 mins",
//     "lastMileTravelString": "1.4 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 23:30:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "aggregatedDiscountInfoV3": {
//     "header": "20% OFF",
//     "subHeader": "UPTO ₹50"
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/haldirams-restaurant-sitabuldi-nagpur-53484",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "114358",
//     "name": "Natural Ice Cream",
//     "cloudinaryImageId": "ac9ym0v8yvu1juxr5aq1",
//     "locality": "Khare Town",
//     "areaName": "Dharampeth",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//     "Ice Cream",
//     "Desserts"
//     ],
//     "avgRating": 4.6,
//     "veg": true,
//     "feeDetails": {
//     "restaurantId": "114358",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2900
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2900
//     },
//     "parentId": "2093",
//     "avgRatingString": "4.6",
//     "totalRatingsString": "5K+",
//     "sla": {
//     "deliveryTime": 22,
//     "lastMileTravel": 3,
//     "serviceability": "SERVICEABLE",
//     "slaString": "22 mins",
//     "lastMileTravelString": "3.0 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 23:45:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "aggregatedDiscountInfoV3": {
//     "header": "20% OFF",
//     "subHeader": "UPTO ₹50"
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/natural-ice-cream-khare-town-dharampeth-nagpur-114358",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "54053",
//     "name": "Pizza Hut",
//     "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//     "locality": "Sitabuldi",
//     "areaName": "Sitabuldi",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//     "Pizzas"
//     ],
//     "avgRating": 3.9,
//     "feeDetails": {
//     "restaurantId": "54053",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2400
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2400
//     },
//     "parentId": "721",
//     "avgRatingString": "3.9",
//     "totalRatingsString": "5K+",
//     "sla": {
//     "deliveryTime": 35,
//     "lastMileTravel": 1,
//     "serviceability": "SERVICEABLE",
//     "slaString": "35 mins",
//     "lastMileTravelString": "1.0 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-17 00:00:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {},
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/pizza-hut-sitabuldi-nagpur-54053",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "53418",
//     "name": "Faasos - Wraps & Rolls",
//     "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
//     "locality": "Mohan Nagar",
//     "areaName": "Sadar",
//     "costForTwo": "₹200 for two",
//     "cuisines": [
//     "Kebabs",
//     "Fast Food",
//     "Snacks",
//     "North Indian",
//     "American",
//     "Healthy Food",
//     "Desserts",
//     "Beverages"
//     ],
//     "avgRating": 4,
//     "feeDetails": {
//     "restaurantId": "53418",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2400
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2400
//     },
//     "parentId": "21809",
//     "avgRatingString": "4.0",
//     "totalRatingsString": "5K+",
//     "sla": {
//     "deliveryTime": 22,
//     "lastMileTravel": 2.4,
//     "serviceability": "SERVICEABLE",
//     "slaString": "22 mins",
//     "lastMileTravelString": "2.4 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 23:59:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "aggregatedDiscountInfoV3": {
//     "header": "₹125 OFF",
//     "subHeader": "ABOVE ₹249",
//     "discountTag": "FLAT DEAL"
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-mohan-nagar-sadar-nagpur-53418",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "63013",
//     "name": "LunchBox - Meals and Thalis",
//     "cloudinaryImageId": "su3q3pwzz3we7yr4wsc8",
//     "locality": "Mohan Nagar",
//     "areaName": "Sadar",
//     "costForTwo": "₹200 for two",
//     "cuisines": [
//     "Biryani",
//     "North Indian",
//     "Punjabi",
//     "Healthy Food",
//     "Desserts",
//     "Beverages"
//     ],
//     "avgRating": 3.8,
//     "feeDetails": {
//     "restaurantId": "63013",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2400
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2400
//     },
//     "parentId": "4925",
//     "avgRatingString": "3.8",
//     "totalRatingsString": "5K+",
//     "sla": {
//     "deliveryTime": 20,
//     "lastMileTravel": 2.4,
//     "serviceability": "SERVICEABLE",
//     "slaString": "20 mins",
//     "lastMileTravelString": "2.4 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 23:59:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "aggregatedDiscountInfoV3": {
//     "header": "₹125 OFF",
//     "subHeader": "ABOVE ₹599",
//     "discountTag": "FLAT DEAL"
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-mohan-nagar-sadar-nagpur-63013",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "53419",
//     "name": "Behrouz Biryani",
//     "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
//     "locality": "Mohan Nagar",
//     "areaName": "Sadar",
//     "costForTwo": "₹500 for two",
//     "cuisines": [
//     "Biryani",
//     "Mughlai",
//     "North Indian",
//     "Lucknowi",
//     "Hyderabadi",
//     "Kebabs",
//     "Desserts",
//     "Beverages"
//     ],
//     "avgRating": 4.1,
//     "feeDetails": {
//     "restaurantId": "53419",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2900
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2900
//     },
//     "parentId": "1803",
//     "avgRatingString": "4.1",
//     "totalRatingsString": "5K+",
//     "sla": {
//     "deliveryTime": 21,
//     "lastMileTravel": 2.4,
//     "serviceability": "SERVICEABLE",
//     "slaString": "21 mins",
//     "lastMileTravelString": "2.4 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 23:59:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "aggregatedDiscountInfoV3": {
//     "header": "₹125 OFF",
//     "subHeader": "ABOVE ₹249",
//     "discountTag": "FLAT DEAL"
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/behrouz-biryani-mohan-nagar-sadar-nagpur-53419",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "56350",
//     "name": "Checkers",
//     "cloudinaryImageId": "d5516079bd5c3cf93e9c5a5340287894",
//     "locality": "Residency Road",
//     "areaName": "Sadar",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//     "Chinese",
//     "North Indian",
//     "Indian",
//     "Tandoor",
//     "Continental",
//     "Beverages",
//     "Pizzas",
//     "Desserts"
//     ],
//     "avgRating": 4.3,
//     "feeDetails": {
//     "restaurantId": "56350",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 2400
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 2400
//     },
//     "parentId": "21854",
//     "avgRatingString": "4.3",
//     "totalRatingsString": "10K+",
//     "sla": {
//     "deliveryTime": 21,
//     "lastMileTravel": 2.4,
//     "serviceability": "SERVICEABLE",
//     "slaString": "21 mins",
//     "lastMileTravelString": "2.4 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 23:00:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {},
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/checkers-residency-road-sadar-nagpur-56350",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "333450",
//     "name": "Biryani By Kilo",
//     "cloudinaryImageId": "cmghgjsw36hnrxtqwrp8",
//     "locality": "Dharampeth",
//     "areaName": "Dharampeth",
//     "costForTwo": "₹499 for two",
//     "cuisines": [
//     "Biryani",
//     "Hyderabadi",
//     "North Indian",
//     "Kebabs",
//     "Mughlai",
//     "Desserts"
//     ],
//     "avgRating": 4.1,
//     "feeDetails": {
//     "restaurantId": "333450",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 3400
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 3400
//     },
//     "parentId": "130",
//     "avgRatingString": "4.1",
//     "totalRatingsString": "1K+",
//     "sla": {
//     "deliveryTime": 40,
//     "lastMileTravel": 3.8,
//     "serviceability": "SERVICEABLE",
//     "slaString": "40 mins",
//     "lastMileTravelString": "3.8 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 23:00:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "aggregatedDiscountInfoV3": {
//     "header": "20% OFF",
//     "subHeader": "UPTO ₹50"
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/biryani-by-kilo-dharampeth-nagpur-333450",
//     "type": "WEBLINK"
//     }
//     },
//     {
//     "info": {
//     "id": "92015",
//     "name": "Shabana's Afzal Bakery",
//     "cloudinaryImageId": "jr6jwmdrhjwojxjmujpv",
//     "locality": "Friends Colony",
//     "areaName": "Gittikhadan",
//     "costForTwo": "₹250 for two",
//     "cuisines": [
//     "Bakery"
//     ],
//     "avgRating": 4.1,
//     "feeDetails": {
//     "restaurantId": "92015",
//     "fees": [
//     {
//     "name": "BASE_DISTANCE",
//     "fee": 4900
//     },
//     {
//     "name": "BASE_TIME"
//     },
//     {
//     "name": "ANCILLARY_SURGE_FEE"
//     }
//     ],
//     "totalFee": 4900
//     },
//     "parentId": "180414",
//     "avgRatingString": "4.1",
//     "totalRatingsString": "1K+",
//     "sla": {
//     "deliveryTime": 44,
//     "lastMileTravel": 8,
//     "serviceability": "SERVICEABLE",
//     "slaString": "44 mins",
//     "lastMileTravelString": "8.0 km",
//     "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//     "nextCloseTime": "2023-09-16 22:00:00",
//     "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//     "entityBadges": {
//     "imageBased": {},
//     "textBased": {},
//     "textExtendedBadges": {}
//     }
//     },
//     "aggregatedDiscountInfoV3": {
//     "header": "40% OFF",
//     "subHeader": "ABOVE ₹149",
//     "discountTag": "FLAT DEAL"
//     },
//     "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//     "lottie": {},
//     "video": {}
//     }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//     "link": "https://www.swiggy.com/restaurants/shabanas-afzal-bakery-friends-colony-gittikhadan-nagpur-92015",
//     "type": "WEBLINK"
//     }
//     }
//     ]




const AppLayout=()=>{
return <div className="app">
    <Headers/>
    <Body/>
</div>
}



const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(<AppLayout/>);


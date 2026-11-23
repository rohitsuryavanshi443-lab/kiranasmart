const T={
dash:["Dashboard","डैशबोर्ड","ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"],stock:["Stock","स्टॉक","ಸ್ಟಾಕ್"],add:["Add batch","बैच जोड़ें","ಬ್ಯಾಚ್ ಸೇರಿಸಿ"],hist:["History","इतिहास","ಇತಿಹಾಸ"],set:["Settings","सेटिंग्स","ಸೆಟ್ಟಿಂಗ್‌ಗಳು"],
prods:["Products","उत्पाद","ಉತ್ಪನ್ನಗಳು"],bats:["Batches","बैच","ಬ್ಯಾಚ್‌ಗಳು"],g:["Safe","सुरक्षित","ಸುರಕ್ಷಿತ"],y:["Inspect","जाँच करें","ಪರಿಶೀಲಿಸಿ"],r:["Urgent","अत्यावश्यक","ತುರ್ತು"],
name:["Product name","उत्पाद का नाम","ಉತ್ಪನ್ನದ ಹೆಸರು"],brand:["Brand","ब्रांड","ಬ್ರಾಂಡ್"],cat:["Category","श्रेणी","ವರ್ಗ"],bno:["Batch number","बैच नंबर","ಬ್ಯಾಚ್ ಸಂಖ್ಯೆ"],
mfg:["Manufacturing date (optional)","निर्माण तिथि (वैकल्पिक)","ತಯಾರಿಕಾ ದಿನಾಂಕ (ಐಚ್ಛಿಕ)"],mfgHint:["Needed to calculate the 50% and 25% shelf-life reminders.","50% और 25% अवधि के रिमाइंडर के लिए यह तारीख ज़रूरी है।","50% ಮತ್ತು 25% ಅವಧಿ ಜ್ಞಾಪನೆ ಲೆಕ್ಕಿಸಲು ಈ ದಿನಾಂಕ ಅಗತ್ಯ."],exp:["Expiry date","समाप्ति तिथि","ಅವಧಿ ಮುಗಿಯುವ ದಿನಾಂಕ"],recv:["Received date","प्राप्ति तिथि","ಸ್ವೀಕರಿಸಿದ ದಿನಾಂಕ"],qty:["Quantity received","प्राप्त मात्रा","ಸ್ವೀಕರಿಸಿದ ಪ್ರಮಾಣ"],
save:["Save","सहेजें","ಉಳಿಸಿ"],cancel:["Cancel","रद्द करें","ರದ್ದುಮಾಡಿ"],
search:["Search product, brand or batch","उत्पाद, ब्रांड या बैच खोजें","ಉತ್ಪನ್ನ, ಬ್ರಾಂಡ್ ಅಥವಾ ಬ್ಯಾಚ್ ಹುಡುಕಿ"],all:["All","सभी","ಎಲ್ಲಾ"],verify:["Verify stock","स्टॉक जाँचें","ಸ್ಟಾಕ್ ಪರಿಶೀಲಿಸಿ"],
avail:["Still available","अभी उपलब्ध","ಇನ್ನೂ ಲಭ್ಯ"],sold:["Completely sold","पूरा बिक गया","ಪೂರ್ತಿ ಮಾರಾಟ"],part:["Partially available","आंशिक उपलब्ध","ಭಾಗಶಃ ಲಭ್ಯ"],ret:["Returned to supplier","सप्लायर को लौटाया","ಪೂರೈಕೆದಾರರಿಗೆ ಹಿಂತಿರುಗಿಸಿದೆ"],disp:["Disposed of","नष्ट किया","ವಿಲೇವಾರಿ ಮಾಡಲಾಗಿದೆ"],nf:["Not found – investigate","नहीं मिला – जाँच करें","ಸಿಗಲಿಲ್ಲ – ತನಿಖೆ ಮಾಡಿ"],
edit:["Edit","बदलें","ಸಂಪಾದಿಸಿ"],del:["Delete","हटाएँ","ಅಳಿಸಿ"],sure:["Delete this batch record? This cannot be undone.","यह बैच रिकॉर्ड हटाएँ? यह वापस नहीं होगा।","ಈ ಬ್ಯಾಚ್ ದಾಖಲೆ ಅಳಿಸಬೇಕೆ? ಇದನ್ನು ಹಿಂತೆಗೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ."],
empty:["No batches yet. Add your first batch.","अभी कोई बैच नहीं। पहला बैच जोड़ें।","ಇನ್ನೂ ಬ್ಯಾಚ್‌ಗಳಿಲ್ಲ. ಮೊದಲ ಬ್ಯಾಚ್ ಸೇರಿಸಿ."],left:["% shelf life left","% अवधि शेष","% ಅವಧಿ ಉಳಿದಿದೆ"],
noReminder:["No percentage reminder","प्रतिशत रिमाइंडर नहीं","ಶೇಕಡಾವಾರು ಜ್ಞಾಪನೆ ಇಲ್ಲ"],needMfg:["Add a manufacturing date to enable life reminders.","अवधि रिमाइंडर के लिए निर्माण तिथि जोड़ें।","ಅವಧಿ ಜ್ಞಾಪನೆಗಾಗಿ ತಯಾರಿಕಾ ದಿನಾಂಕ ಸೇರಿಸಿ."],afterDate:["Reminder period ended; this record stays in your list.","रिमाइंडर अवधि पूरी हुई; यह रिकॉर्ड सूची में रहेगा।","ಜ್ಞಾಪನೆ ಅವಧಿ ಮುಗಿದಿದೆ; ಈ ದಾಖಲೆ ಪಟ್ಟಿಯಲ್ಲೇ ಇರುತ್ತದೆ."],neutralHelp:["Percentage reminders need a manufacturing date and stop at the package date. Records are never removed automatically.","प्रतिशत रिमाइंडर के लिए निर्माण तिथि चाहिए और वे पैकेट की तारीख पर रुकते हैं। रिकॉर्ड अपने आप नहीं हटते।","ಶೇಕಡಾವಾರು ಜ್ಞಾಪನೆಗೆ ತಯಾರಿಕಾ ದಿನಾಂಕ ಅಗತ್ಯ; ಪ್ಯಾಕೆಟ್ ದಿನಾಂಕದಂದು ಅವು ನಿಲ್ಲುತ್ತವೆ. ದಾಖಲೆಗಳು ತಾನಾಗಿಯೇ ಅಳಿಸುವುದಿಲ್ಲ."],
r1:["50% of shelf life remains. Check this batch.","50% अवधि शेष है। इस बैच की जाँच करें।","50% ಅವಧಿ ಉಳಿದಿದೆ. ಈ ಬ್ಯಾಚ್ ಪರಿಶೀಲಿಸಿ."],r2:["25% of shelf life remains. Check this batch.","25% अवधि शेष है। इस बैच की जाँच करें।","25% ಅವಧಿ ಉಳಿದಿದೆ. ಈ ಬ್ಯಾಚ್ ಪರಿಶೀಲಿಸಿ."],
dupe:["This batch number already exists for this product.","इस उत्पाद का यह बैच नंबर पहले से है।","ಈ ಉತ್ಪನ್ನಕ್ಕೆ ಈ ಬ್ಯಾಚ್ ಸಂಖ್ಯೆ ಈಗಾಗಲೇ ಇದೆ."],errd:["Manufacturing date must be before expiry date.","निर्माण तिथि समाप्ति से पहले होनी चाहिए।","ತಯಾರಿಕಾ ದಿನಾಂಕ ಅವಧಿ ದಿನಾಂಕಕ್ಕಿಂತ ಮೊದಲು ಇರಬೇಕು."],
errr:["Enter a product name, expiry date and quantity of at least one.","उत्पाद का नाम, समाप्ति तारीख और कम से कम एक मात्रा भरें।","ಉತ್ಪನ್ನದ ಹೆಸರು, ಅವಧಿ ದಿನಾಂಕ ಮತ್ತು ಕನಿಷ್ಠ ಒಂದು ಪ್ರಮಾಣ ನಮೂದಿಸಿ."],
lang:["Language","भाषा","ಭಾಷೆ"],notif:["Enable notifications","सूचनाएँ चालू करें","ಅಧಿಸೂಚನೆ ಆನ್ ಮಾಡಿ"],backup:["Backup (copy this text)","बैकअप (यह टेक्स्ट कॉपी करें)","ಬ್ಯಾಕಪ್ (ಈ ಪಠ್ಯ ನಕಲಿಸಿ)"],restore:["Restore from backup (paste above)","बैकअप से वापस लाएँ (ऊपर पेस्ट करें)","ಬ್ಯಾಕಪ್‌ನಿಂದ ಮರುಸ್ಥಾಪಿಸಿ (ಮೇಲೆ ಅಂಟಿಸಿ)"],
bad:["That backup is not valid.","यह बैकअप सही नहीं है।","ಈ ಬ್ಯಾಕಪ್ ಸರಿಯಿಲ್ಲ."],storageSaveFailed:["This device could not save your latest changes. Export a backup now; unsynced changes may be lost when you close the app.","यह डिवाइस नए बदलाव सहेज नहीं पाया। अभी बैकअप निर्यात करें; ऐप बंद करने पर बिना सिंक किए बदलाव खो सकते हैं।","ಈ ಸಾಧನ ಇತ್ತೀಚಿನ ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಲಿಲ್ಲ. ಈಗಲೇ ಬ್ಯಾಕಪ್ ರಫ್ತುಮಾಡಿ; ಸಿಂಕ್ ಆಗದ ಬದಲಾವಣೆಗಳು ಆ್ಯಪ್ ಮುಚ್ಚಿದಾಗ ಕಳೆದುಹೋಗಬಹುದು."],
storageSaveRecovered:["Saving to this device is working again.","इस डिवाइस पर सहेजना फिर से काम कर रहा है।","ಈ ಸಾಧನದಲ್ಲಿ ಉಳಿಸುವಿಕೆ ಮತ್ತೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ."],nonot:["Notifications are blocked or unsupported. Reminders still show inside the app.","सूचनाएँ बंद या अनुपलब्ध हैं। अनुस्मारक ऐप में दिखेंगे।","ಅಧಿಸೂಚನೆ ನಿರ್ಬಂಧಿತ. ಜ್ಞಾಪನೆಗಳು ಆ್ಯಪ್‌ನಲ್ಲಿ ಕಾಣುತ್ತವೆ."],
await:["Percentage reminders to check","जाँचने के लिए प्रतिशत रिमाइंडर","ಪರಿಶೀಲಿಸಬೇಕಾದ ಶೇಕಡಾವಾರು ಜ್ಞಾಪನೆ"],rlog:["Reminder history","अनुस्मारक इतिहास","ಜ್ಞಾಪನೆ ಇತಿಹಾಸ"],upc:["50% and 25% shelf-life reminders; manufacturing date required.","50% और 25% अवधि के रिमाइंडर; निर्माण तिथि ज़रूरी।","50% ಮತ್ತು 25% ಅವಧಿ ಜ್ಞಾಪನೆ; ತಯಾರಿಕಾ ದಿನಾಂಕ ಅಗತ್ಯ."],
recent:["Recently added","हाल में जोड़े","ಇತ್ತೀಚೆಗೆ ಸೇರಿಸಿದ"],note:["Counts show records, not confirmed stock. Check the shelf.","गिनती रिकॉर्ड की है, पक्के स्टॉक की नहीं। शेल्फ जाँचें।","ಎಣಿಕೆ ದಾಖಲೆಗಳದ್ದು, ದೃಢ ಸ್ಟಾಕ್ ಅಲ್ಲ. ಶೆಲ್ಫ್ ಪರಿಶೀಲಿಸಿ."],
verq:["Verified quantity","जाँची गई मात्रा","ಪರಿಶೀಲಿತ ಪ್ರಮಾಣ"],ok:["Saved","सहेजा गया","ಉಳಿಸಲಾಗಿದೆ"],q:["Qty","मात्रा","ಪ್ರಮಾಣ"],ex:["Expires","समाप्ति","ಅವಧಿ"],hn:["Verification notes","जाँच नोट","ಪರಿಶೀಲನೆ ಟಿಪ್ಪಣಿ"],none:["Nothing here yet.","यहाँ अभी कुछ नहीं।","ಇಲ್ಲಿ ಇನ್ನೂ ಏನೂ ಇಲ್ಲ."],
onhand:["On hand","उपलब्ध मात्रा","ಕೈಯಲ್ಲಿರುವುದು"],low:["Low stock","कम स्टॉक","ಕಡಿಮೆ ಸ್ಟಾಕ್"],min:["Low-stock threshold","कम स्टॉक सीमा","ಕಡಿಮೆ ಸ್ಟಾಕ್ ಮಿತಿ"],price:["Cost per unit (₹)","प्रति इकाई लागत (₹)","ಪ್ರತಿ ಘಟಕದ ಬೆಲೆ (₹)"],value:["Stock cost estimate","स्टॉक की अनुमानित लागत","ಸ್ಟಾಕ್ ಅಂದಾಜು ವೆಚ್ಚ"],use:["Use one","एक उपयोग करें","ಒಂದನ್ನು ಬಳಸಿ"],used:["Used one item","एक वस्तु उपयोग हुई","ಒಂದು ವಸ್ತು ಬಳಕೆಯಾಗಿದೆ"],csv:["Export CSV","CSV निर्यात करें","CSV ರಫ್ತು"],badcsv:["Could not export data.","डेटा निर्यात नहीं हो सका।","ಡೇಟಾವನ್ನು ರಫ್ತು ಮಾಡಲಾಗಲಿಲ್ಲ."],errq:["Verified quantity cannot exceed quantity received.","जाँची गई मात्रा प्राप्त मात्रा से अधिक नहीं हो सकती।","ಪರಿಶೀಲಿತ ಪ್ರಮಾಣ ಸ್ವೀಕರಿಸಿದ ಪ್ರಮಾಣಕ್ಕಿಂತ ಹೆಚ್ಚಿರಬಾರದು."],expense:["Tracked value · not a budget recommendation","दर्ज मूल्य · बजट सलाह नहीं","ದಾಖಲಿಸಿದ ಮೌಲ್ಯ · ಬಜೆಟ್ ಸಲಹೆಯಲ್ಲ"],tagline:["Shop stock · works offline","दुकान का स्टॉक · ऑफ़लाइन काम करता है","ಅಂಗಡಿಯ ಸ್ಟಾಕ್ · ಆಫ್‌ಲೈನ್‌ನಲ್ಲೂ ಕೆಲಸ"]};
Object.assign(T,{
 today:["Today's shop check","आज की दुकान जाँच","ಇಂದಿನ ಅಂಗಡಿ ಪರಿಶೀಲನೆ"],guide:["1. Add deliveries. 2. Check yellow items today. 3. Inspect red items now.","1. माल जोड़ें। 2. पीली वस्तुएँ आज जाँचें। 3. लाल वस्तुओं की अभी जाँच करें।","1. ಬಂದ ಸರಕು ಸೇರಿಸಿ. 2. ಹಳದಿ ವಸ್ತುಗಳನ್ನು ಇಂದು ಪರಿಶೀಲಿಸಿ. 3. ಕೆಂಪು ವಸ್ತುಗಳನ್ನು ಈಗ ಪರಿಶೀಲಿಸಿ."],
 greenHelp:["Good for normal sale. Keep on the shelf and check on your next stock round.","सामान्य बिक्री के लिए ठीक। शेल्फ पर रखें और अगली स्टॉक जाँच में देखें।","ಸಾಮಾನ್ಯ ಮಾರಾಟಕ್ಕೆ ಸರಿ. ಶೆಲ್ಫ್‌ನಲ್ಲಿ ಇಡಿ; ಮುಂದಿನ ಸ್ಟಾಕ್ ಪರಿಶೀಲನೆಯಲ್ಲಿ ನೋಡಿ."],
 yellowHelp:["Check the date and quantity today. Move older items to the front.","आज तारीख और मात्रा जाँचें। पुराना माल आगे रखें।","ಇಂದು ದಿನಾಂಕ ಮತ್ತು ಪ್ರಮಾಣ ನೋಡಿ. ಹಳೆಯ ಸರಕುಗಳನ್ನು ಮುಂದೆ ಇಡಿ."],
 redHelp:["25% of shelf life remains. Check the package and shelf; the app does not decide whether stock can be sold.","25% अवधि शेष है। पैकेट और शेल्फ़ जाँचें; बिक्री का निर्णय ऐप नहीं करता।","25% ಅವಧಿ ಉಳಿದಿದೆ. ಪ್ಯಾಕೆಟ್ ಮತ್ತು ಶೆಲ್ಫ್ ಪರಿಶೀಲಿಸಿ; ಮಾರಾಟದ ನಿರ್ಧಾರವನ್ನು ಆ್ಯಪ್ ಮಾಡುವುದಿಲ್ಲ."],
 batches:["Batches","बैच","ಬ್ಯಾಚ್‌ಗಳು"],itemsHere:["No items in this section.","इस भाग में कोई वस्तु नहीं।","ಈ ವಿಭಾಗದಲ್ಲಿ ವಸ್ತುಗಳಿಲ್ಲ."],
 recentTitle:["Quick add a saved product","पहले से जोड़ा उत्पाद चुनें","ಉಳಿಸಿದ ಉತ್ಪನ್ನವನ್ನು ತ್ವರಿತವಾಗಿ ಸೇರಿಸಿ"], recentHelp:["Choose a product added before to reuse its name, brand, category and saved stock settings. Enter this delivery's expiry and quantity.","पहले जोड़ा उत्पाद चुनकर उसका नाम, ब्रांड, श्रेणी और स्टॉक सेटिंग फिर से इस्तेमाल करें। इस खेप की समाप्ति और मात्रा भरें।","ಮೊದಲು ಸೇರಿಸಿದ ಉತ್ಪನ್ನ ಆಯ್ಕೆಮಾಡಿ ಅದರ ಹೆಸರು, ಬ್ರಾಂಡ್, ವರ್ಗ ಮತ್ತು ಸ್ಟಾಕ್ ಸೆಟ್ಟಿಂಗ್ ಮರುಬಳಸಿ. ಈ ಸರಕಿನ ಅವಧಿ ಮತ್ತು ಪ್ರಮಾಣ ನಮೂದಿಸಿ."],
 productCard:["Product details","उत्पाद विवरण","ಉತ್ಪನ್ನ ವಿವರಗಳು"],productHint:["Enter a new product or choose a saved product above.","नया उत्पाद भरें या ऊपर से पहले जोड़ा उत्पाद चुनें।","ಹೊಸ ಉತ್ಪನ್ನ ನಮೂದಿಸಿ ಅಥವಾ ಮೇಲಿನ ಉಳಿಸಿದ ಉತ್ಪನ್ನ ಆಯ್ಕೆಮಾಡಿ."],
 stockCard:["Delivery & expiry","माल और समाप्ति","ಸರಕು ಮತ್ತು ಅವಧಿ"],stockHint:["Enter the expiry date and batch number if one is printed on the package.","पैकेट की समाप्ति तारीख भरें; बैच नंबर छपा हो तो जोड़ें।","ಅವಧಿ ದಿನಾಂಕ ನಮೂದಿಸಿ; ಪ್ಯಾಕೆಟ್‌ನಲ್ಲಿ ಬ್ಯಾಚ್ ಸಂಖ್ಯೆ ಇದ್ದರೆ ಸೇರಿಸಿ."],
 quantity:["Quantity received","प्राप्त मात्रा","ಸ್ವೀಕರಿಸಿದ ಪ್ರಮಾಣ"],details:["More details (optional)","और विवरण (वैकल्पिक)","ಹೆಚ್ಚಿನ ವಿವರಗಳು (ಐಚ್ಛಿಕ)"],category:["Category","श्रेणी","ವರ್ಗ"],selectCat:["Choose a category","श्रेणी चुनें","ವರ್ಗ ಆಯ್ಕೆಮಾಡಿ"],
 catDairy:["Dairy","डेयरी","ಹಾಲಿನ ಉತ್ಪನ್ನ"],catVeg:["Vegetables","सब्ज़ियाँ","ತರಕಾರಿಗಳು"],catFruit:["Fruits","फल","ಹಣ್ಣುಗಳು"],catMeat:["Meat & fish","मांस और मछली","ಮಾಂಸ ಮತ್ತು ಮೀನು"],catSnacks:["Snacks","स्नैक्स","ತಿಂಡಿಗಳು"],catDrinks:["Beverages","पेय","ಪಾನೀಯಗಳು"],catOther:["Other","अन्य","ಇತರೆ"],
 appearance:["Appearance","दिखावट","ಕಾಣಿಕೆ"],themeHelp:["Use system settings or choose a theme.","सिस्टम के अनुसार रखें या थीम चुनें।","ಸಿಸ್ಟಮ್ ಸೆಟ್ಟಿಂಗ್ ಬಳಸಿ ಅಥವಾ ಥೀಮ್ ಆಯ್ಕೆಮಾಡಿ."],system:["System","सिस्टम","ಸಿಸ್ಟಮ್"],light:["Light","लाइट","ಬೆಳಕು"],dark:["Dark","डार्क","ಕತ್ತಲೆ"],general:["General","सामान्य","ಸಾಮಾನ್ಯ"],
 guest:["Guest mode","अतिथि मोड","ಅತಿಥಿ ಮೋಡ್"],guestHelp:["No sign-in required. Items are saved on this device.","साइन-इन ज़रूरी नहीं। वस्तुएँ इसी डिवाइस पर सहेजी जाती हैं।","ಸೈನ್-ಇನ್ ಅಗತ್ಯವಿಲ್ಲ. ವಸ್ತುಗಳು ಈ ಸಾಧನದಲ್ಲೇ ಉಳಿಯುತ್ತವೆ."],
 privacy:["Privacy & storage","गोपनीयता और स्टोरेज","ಗೌಪ್ಯತೆ ಮತ್ತು ಸಂಗ್ರಹಣೆ"],privacyHelp:["Your inventory stays in this browser while you are signed out.","साइन आउट रहने पर आपका स्टॉक इसी ब्राउज़र में रहता है।","ಸೈನ್ ಔಟ್ ಆಗಿರುವಾಗ ನಿಮ್ಮ ಸ್ಟಾಕ್ ಈ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ಇರುತ್ತದೆ."],
 data:["Data & backup","डेटा और बैकअप","ಡೇಟಾ ಮತ್ತು ಬ್ಯಾಕಪ್"],exportHelp:["Download a CSV spreadsheet of this store's batches.","इस दुकान के बैच की CSV स्प्रेडशीट डाउनलोड करें।","ಈ ಅಂಗಡಿಯ ಬ್ಯಾಚ್‌ಗಳ CSV ಸ್ಪ್ರೆಡ್‌ಶೀಟ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ."],backupHelp:["Copy or restore a backup of this browser's inventory.","इस ब्राउज़र के स्टॉक का बैकअप कॉपी या वापस लाएँ।","ಈ ಬ್ರೌಸರ್‌ನ ಸ್ಟಾಕ್ ಬ್ಯಾಕಪ್ ನಕಲಿಸಿ ಅಥವಾ ಮರುಸ್ಥಾಪಿಸಿ."],
 formIntro:["Add an item from a delivery. Required fields are marked *.","डिलीवरी से वस्तु जोड़ें। * वाले फ़ील्ड ज़रूरी हैं।","ಬಂದ ಸರಕಿನಿಂದ ವಸ್ತು ಸೇರಿಸಿ. * ಗುರುತಿಸಿದ ವಿವರಗಳು ಅಗತ್ಯ."],required:["Required","ज़रूरी","ಅಗತ್ಯ"],expiryHelp:["Check the date printed on the package.","पैकेट पर छपी तारीख जाँचें।","ಪ್ಯಾಕೆಟ್‌ನ ದಿನಾಂಕ ಪರಿಶೀಲಿಸಿ."],batchOptional:["Optional — leave blank if the package has no batch number.","वैकल्पिक — पैकेट पर नंबर न हो तो खाली छोड़ें।","ಐಚ್ಛಿಕ — ಪ್ಯಾಕೆಟ್‌ನಲ್ಲಿ ಬ್ಯಾಚ್ ಸಂಖ್ಯೆ ಇಲ್ಲದಿದ್ದರೆ ಖಾಲಿ ಬಿಡಿ."],
 copyBackup:["Copy backup","बैकअप कॉपी करें","ಬ್ಯಾಕಪ್ ನಕಲಿಸಿ"],copyFallback:["Backup selected. Copy it manually.","बैकअप चुना गया है। उसे कॉपी करें।","ಬ್ಯಾಕಪ್ ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ. ಅದನ್ನು ನಕಲಿಸಿ."],restoreHint:["Paste a saved backup here, then restore.","सहेजा बैकअप यहाँ चिपकाएँ, फिर वापस लाएँ।","ಉಳಿಸಿದ ಬ್ಯಾಕಪ್ ಇಲ್ಲಿ ಅಂಟಿಸಿ, ನಂತರ ಮರುಸ್ಥಾಪಿಸಿ."]
});
Object.assign(T,{
 account:["Optional account & cloud backup","वैकल्पिक खाता और क्लाउड बैकअप","ಐಚ್ಛಿಕ ಖಾತೆ ಮತ್ತು ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್"], accountHelp:["Guest mode stays available. Cloud backups are manual: upload overwrites the cloud copy; restore replaces this device's inventory.","अतिथि मोड उपलब्ध रहेगा। क्लाउड बैकअप हाथ से होता है: अपलोड क्लाउड कॉपी बदलेगा; रीस्टोर इस डिवाइस का स्टॉक बदलेगा।","ಅತಿಥಿ ಮೋಡ್ ಲಭ್ಯವಿರುತ್ತದೆ. ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್ ಕೈಯಾರೆ: ಅಪ್‌ಲೋಡ್ ಕ್ಲೌಡ್ ಪ್ರತಿಯನ್ನು ಬದಲಿಸುತ್ತದೆ; ಮರುಸ್ಥಾಪನೆ ಈ ಸಾಧನದ ಸ್ಟಾಕ್ ಬದಲಿಸುತ್ತದೆ."],
 projectUrl:["Supabase project URL","Supabase प्रोजेक्ट URL","Supabase ಪ್ರಾಜೆಕ್ಟ್ URL"],publicKey:["Supabase publishable / anon key","Supabase publishable / anon key","Supabase publishable / anon ಕೀ"],
 saveConfig:["Save connection","कनेक्शन सहेजें","ಸಂಪರ್ಕ ಉಳಿಸಿ"],configReady:["Supabase connection ready.","Supabase कनेक्शन तैयार है।","Supabase ಸಂಪರ್ಕ ಸಿದ್ಧವಾಗಿದೆ."],
 configMissing:["Enter the Supabase project URL and publishable key.","Supabase प्रोजेक्ट URL और publishable key भरें।","Supabase ಪ್ರಾಜೆಕ್ಟ್ URL ಮತ್ತು publishable ಕೀ ನಮೂದಿಸಿ."],
 configInvalid:["Enter a valid HTTPS Supabase project URL.","सही HTTPS Supabase प्रोजेक्ट URL भरें।","ಸರಿಯಾದ HTTPS Supabase ಪ್ರಾಜೆಕ್ಟ್ URL ನಮೂದಿಸಿ."],
 keyNotice:["Use only the publishable (anon) key, never a service-role key. Host on HTTPS or localhost for sign-in.","केवल publishable (anon) key इस्तेमाल करें, service-role key नहीं। साइन-इन के लिए HTTPS या localhost पर होस्ट करें।","publishable (anon) ಕೀ ಮಾತ್ರ ಬಳಸಿ; service-role ಕೀ ಬೇಡ. ಸೈನ್-ಇನ್‌ಗೆ HTTPS ಅಥವಾ localhost ನಲ್ಲಿ ಹೋಸ್ಟ್ ಮಾಡಿ."],
 email:["Email","ईमेल","ಇಮೇಲ್"],password:["Password","पासवर्ड","ಪಾಸ್‌ವರ್ಡ್"],createAccount:["Create account","खाता बनाएँ","ಖಾತೆ ರಚಿಸಿ"],signIn:["Sign in","साइन इन","ಸೈನ್ ಇನ್"],
 signOut:["Sign out","साइन आउट","ಸೈನ್ ಔಟ್"],signedOut:["Signed out. Your local inventory is unchanged.","साइन आउट किया। आपका स्थानीय स्टॉक नहीं बदला।","ಸೈನ್ ಔಟ್ ಆಗಿದೆ. ಸ್ಥಳೀಯ ಸ್ಟಾಕ್ ಬದಲಾಗಿಲ್ಲ."],
 authConfirm:["Check your email to confirm the new account, then sign in.","नए खाते की पुष्टि के लिए ईमेल देखें, फिर साइन इन करें।","ಹೊಸ ಖಾತೆ ದೃಢೀಕರಿಸಲು ಇಮೇಲ್ ನೋಡಿ, ನಂತರ ಸೈನ್ ಇನ್ ಮಾಡಿ."],
 authRequired:["Enter your email and password.","ईमेल और पासवर्ड भरें।","ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ."],authError:["Could not complete the account request.","खाते का अनुरोध पूरा नहीं हुआ।","ಖಾತೆ ವಿನಂತಿ ಪೂರ್ಣಗೊಳಿಸಲಾಗಲಿಲ್ಲ."],
 backupAccount:["Signed in as:","इस खाते में साइन इन:","ಸೈನ್ ಇನ್ ಆಗಿರುವ ಖಾತೆ:"],uploadCloud:["Upload local inventory","स्थानीय स्टॉक अपलोड करें","ಸ್ಥಳೀಯ ಸ್ಟಾಕ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ"],
 restoreCloud:["Restore cloud inventory","क्लाउड स्टॉक वापस लाएँ","ಕ್ಲೌಡ್ ಸ್ಟಾಕ್ ಮರುಸ್ಥಾಪಿಸಿ"],
 uploadConfirm:["Replace the cloud backup with the inventory on this device?","इस डिवाइस के स्टॉक से क्लाउड बैकअप बदलें?","ಈ ಸಾಧನದ ಸ್ಟಾಕ್‌ನಿಂದ ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್ ಬದಲಿಸಬೇಕೆ?"],
 restoreConfirm:["Replace this device's inventory with your cloud backup? Local records on this device will be replaced.","इस डिवाइस का स्टॉक क्लाउड बैकअप से बदलें? यहाँ के स्थानीय रिकॉर्ड बदल जाएँगे।","ಈ ಸಾಧನದ ಸ್ಟಾಕ್ ಅನ್ನು ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್‌ನಿಂದ ಬದಲಿಸಬೇಕೆ? ಸ್ಥಳೀಯ ದಾಖಲೆಗಳು ಬದಲಾಗುತ್ತವೆ."],
 cloudNoData:["No cloud backup was found for this account.","इस खाते के लिए क्लाउड बैकअप नहीं मिला।","ಈ ಖಾತೆಗೆ ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್ ಕಂಡುಬಂದಿಲ್ಲ."],
 cloudSaved:["Cloud backup updated.","क्लाउड बैकअप अपडेट हुआ।","ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್ ನವೀಕರಿಸಲಾಗಿದೆ."],cloudRestored:["Cloud backup restored to this device.","क्लाउड बैकअप इस डिवाइस पर वापस आया।","ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್ ಈ ಸಾಧನಕ್ಕೆ ಮರುಸ್ಥಾಪಿಸಲಾಗಿದೆ."],
 cloudInvalid:["Cloud backup format is invalid.","क्लाउड बैकअप का प्रारूप सही नहीं है।","ಕ್ಲೌಡ್ ಬ್ಯಾಕಪ್ ಸ್ವರೂಪ ಸರಿಯಿಲ್ಲ."],
 unsafeKey:["A service-role or secret key cannot be used in the browser. Use the publishable / anon key.","ब्राउज़र में service-role या secret key नहीं चल सकती। publishable / anon key इस्तेमाल करें।","ಬ್ರೌಸರ್‌ನಲ್ಲಿ service-role ಅಥವಾ secret ಕೀ ಬಳಸಬೇಡಿ. publishable / anon ಕೀ ಬಳಸಿ."],
 working:["Working…","काम हो रहा है…","ಕೆಲಸ ನಡೆಯುತ್ತಿದೆ…"]
});
Object.assign(T,{
 guideBtn:["Guide","गाइड","ಮಾರ್ಗದರ್ಶಿ"],guideTitle:["Your shop, fresher every day","हर दिन आपकी दुकान और ताज़ा","ಪ್ರತಿದಿನ ನಿಮ್ಮ ಅಂಗಡಿ ಇನ್ನಷ್ಟು ತಾಜಾ"],
 guideWelcome:["Welcome to FreshAlert","FreshAlert में आपका स्वागत है","FreshAlert ಗೆ ಸ್ವಾಗತ"],guidePurpose:["Prevent expiry losses and keep shop stock fresh with a quick daily check.","समाप्ति से होने वाले नुकसान रोकें और रोज़ की छोटी जाँच से स्टॉक ताज़ा रखें।","ತ್ವರಿತ ದೈನಂದಿನ ಪರಿಶೀಲನೆಯಿಂದ ಅವಧಿ ನಷ್ಟ ತಡೆಯಿರಿ ಮತ್ತು ಅಂಗಡಿ ಸ್ಟಾಕ್ ತಾಜಾ ಇಡಿ."],
 guideWarm:["Good evening, shopkeeper. Let’s make today’s stock check simple.","नमस्ते दुकानदार जी। आज की स्टॉक जाँच आसान बनाते हैं।","ನಮಸ್ಕಾರ ಅಂಗಡಿಯವರೇ. ಇಂದಿನ ಸ್ಟಾಕ್ ಪರಿಶೀಲನೆಯನ್ನು ಸರಳಗೊಳಿಸೋಣ."],
 stepOne:["Welcome","स्वागत","ಸ್ವಾಗತ"],stepTwo:["The 3-color rule","3 रंग का नियम","3 ಬಣ್ಣಗಳ ನಿಯಮ"],stepThree:["Try a daily check","दैनिक जाँच आज़माएँ","ದೈನಂದಿನ ಪರಿಶೀಲನೆ ಪ್ರಯತ್ನಿಸಿ"],stepFour:["Ready to roll","अब तैयार","ಸಿದ್ಧವಾಗಿರಿ"],
 guideStep:["Step {n} of 4","चरण {n} / 4","ಹಂತ {n} / 4"],skip:["Skip guide","गाइड छोड़ें","ಮಾರ್ಗದರ್ಶಿ ಬಿಟ್ಟುಬಿಡಿ"],back:["Back","पीछे","ಹಿಂದೆ"],next:["Next","आगे","ಮುಂದೆ"],startShop:["Open my dashboard","डैशबोर्ड खोलें","ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತೆರೆಯಿರಿ"],
 howToLog:["Add a delivery in seconds","कुछ ही सेकंड में माल जोड़ें","ಕೆಲವೇ ಕ್ಷಣಗಳಲ್ಲಿ ಬಂದ ಸರಕು ಸೇರಿಸಿ"],howToLogCopy:["Enter the product, package expiry date and quantity. Saved products can be reused for the next delivery.","उत्पाद, पैकेट की समाप्ति तारीख और मात्रा भरें। अगली डिलीवरी में पहले जोड़ा उत्पाद फिर इस्तेमाल करें।","ಉತ್ಪನ್ನ, ಪ್ಯಾಕೆಟ್ ಅವಧಿ ದಿನಾಂಕ ಮತ್ತು ಪ್ರಮಾಣ ನಮೂದಿಸಿ. ಮುಂದಿನ ಸರಕಿಗೆ ಉಳಿಸಿದ ಉತ್ಪನ್ನವನ್ನು ಮರುಬಳಸಿ."],
 demoSafe:["Safe","सुरक्षित","ಸುರಕ್ಷಿತ"],demoInspect:["Inspect · Rotate","जाँचें · आगे रखें","ಪರಿಶೀಲಿಸಿ · ಮುಂದೆ ಇಡಿ"],demoUrgent:["Urgent · Check now","अभी जाँचें","ತುರ್ತು · ಈಗ ಪರಿಶೀಲಿಸಿ"],demoSafeCopy:["More than 50% of shelf life remains.","50% से अधिक अवधि शेष है।","50% ಕ್ಕಿಂತ ಹೆಚ್ಚು ಅವಧಿ ಉಳಿದಿದೆ."],demoInspectCopy:["50% of shelf life remains. Check and rotate stock.","50% अवधि शेष है। जाँचें और पुराना स्टॉक आगे रखें।","50% ಅವಧಿ ಉಳಿದಿದೆ. ಪರಿಶೀಲಿಸಿ, ಹಳೆಯ ಸ್ಟಾಕ್ ಮುಂದೆ ಇಡಿ."],demoUrgentCopy:["25% of shelf life remains. Check this batch; the app does not mark or remove products.","25% अवधि शेष है। बैच जाँचें; ऐप वस्तु को समाप्त नहीं बताता या हटाता नहीं।","25% ಅವಧಿ ಉಳಿದಿದೆ. ಬ್ಯಾಚ್ ಪರಿಶೀಲಿಸಿ; ಆ್ಯಪ್ ವಸ್ತುವನ್ನು ಅವಧಿ ಮುಗಿದಿದೆ ಎಂದು ಗುರುತಿಸುವುದಿಲ್ಲ ಅಥವಾ ಅಳಿಸುವುದಿಲ್ಲ."],
 practiceTitle:["A quick shelf check","शेल्फ की छोटी जाँच","ಶೆಲ್ಫ್‌ನ ತ್ವರಿತ ಪರಿಶೀಲನೆ"],practiceCopy:["Sample product · confirm what is physically on your shelf.","नमूना उत्पाद · शेल्फ पर मौजूद मात्रा की पुष्टि करें।","ಮಾದರಿ ಉತ್ಪನ್ನ · ಶೆಲ್ಫ್‌ನಲ್ಲಿರುವ ಪ್ರಮಾಣವನ್ನು ದೃಢಪಡಿಸಿ."],sampleProduct:["Fresh milk","ताज़ा दूध","ತಾಜಾ ಹಾಲು"],sampleBatch:["Sample batch","नमूना बैच","ಮಾದರಿ ಬ್ಯಾಚ್"],testVerify:["Test verify","जाँच का अभ्यास","ಪರಿಶೀಲನೆ ಅಭ್ಯಾಸ"],practiceDone:["Verified! Your daily check is that simple.","जाँच पूरी! आपकी रोज़ की जाँच इतनी ही आसान है।","ಪರಿಶೀಲನೆ ಆಯಿತು! ನಿಮ್ಮ ದೈನಂದಿನ ಪರಿಶೀಲನೆ ಇಷ್ಟು ಸರಳ."],
 readyTitle:["Your shop is ready","आपकी दुकान तैयार है","ನಿಮ್ಮ ಅಂಗಡಿ ಸಿದ್ಧವಾಗಿದೆ"],readyCopy:["Your inventory stays on this device and works offline. You can add products now; no account is required.","आपका स्टॉक इसी डिवाइस पर रहेगा और ऑफ़लाइन काम करेगा। अब उत्पाद जोड़ें; खाता ज़रूरी नहीं।","ನಿಮ್ಮ ಸ್ಟಾಕ್ ಈ ಸಾಧನದಲ್ಲೇ ಉಳಿದು ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಈಗ ಉತ್ಪನ್ನ ಸೇರಿಸಿ; ಖಾತೆ ಅಗತ್ಯವಿಲ್ಲ."],storeName:["Store name (optional)","दुकान का नाम (वैकल्पिक)","ಅಂಗಡಿ ಹೆಸರು (ಐಚ್ಛಿಕ)"],storeNamePlaceholder:["e.g. Akhil's Store","जैसे: अखिल स्टोर","ಉದಾ: ಅಖಿಲ್ ಅಂಗಡಿ"],
 health:["Store freshness","दुकान की ताज़गी","ಅಂಗಡಿಯ ತಾಜಾತನ"],fresh:["Fresh","ताज़ा","ತಾಜಾ"],healthEmpty:["Add active stock to calculate a freshness score.","ताज़गी स्कोर के लिए स्टॉक जोड़ें।","ತಾಜಾತನ ಅಂಕಕ್ಕೆ ಸಕ್ರಿಯ ಸ್ಟಾಕ್ ಸೇರಿಸಿ."],healthBasis:["Based on recorded, active units · verify the shelf","दर्ज सक्रिय मात्रा पर आधारित · शेल्फ़ की पुष्टि करें","ದಾಖಲಿಸಿದ ಸಕ್ರಿಯ ಪ್ರಮಾಣ ಆಧಾರಿತ · ಶೆಲ್ಫ್ ಪರಿಶೀಲಿಸಿ"],grade:["Grade","ग्रेड","ದರ್ಜೆ"],
 horizon:["7-day expiry horizon","अगले 7 दिनों की समाप्ति","7 ದಿನಗಳ ಅವಧಿ ನೋಟ"],horizonHelp:["Tap a day to see batches expiring then.","उस दिन समाप्त होने वाले बैच देखने के लिए तारीख चुनें।","ಆ ದಿನ ಅವಧಿ ಮುಗಿಯುವ ಬ್ಯಾಚ್ ನೋಡಲು ದಿನವನ್ನು ಆಯ್ಕೆಮಾಡಿ."],todayLabel:["Today","आज","ಇಂದು"],tomorrow:["Tomorrow","कल","ನಾಳೆ"],itemsDue:["{n} due","{n} बाकी","{n} ಬಾಕಿ"],clearExpiry:["Clear date filter","तारीख फ़िल्टर हटाएँ","ದಿನಾಂಕ ಫಿಲ್ಟರ್ ತೆರವುಗೊಳಿಸಿ"],sound:["Sound effects","ध्वनि प्रभाव","ಧ್ವನಿ ಪರಿಣಾಮಗಳು"],soundHelp:["Play a quiet click and verification chime.","हल्की क्लिक और जाँच की ध्वनि चलाएँ।","ಮೃದುವಾದ ಕ್ಲಿಕ್ ಮತ್ತು ಪರಿಶೀಲನೆ ಧ್ವನಿ."],guideSetting:["Replay the shop guide","दुकान की गाइड फिर देखें","ಅಂಗಡಿ ಮಾರ್ಗದರ್ಶಿಯನ್ನು ಮತ್ತೆ ನೋಡಿ"],verified:["Verified","जाँचा गया","ಪರಿಶೀಲಿಸಲಾಗಿದೆ"],
 greetingMorning:["Good morning, shopkeeper.","सुप्रभात दुकानदार जी।","ಶುಭೋದಯ ಅಂಗಡಿಯವರೇ."],greetingAfternoon:["Good afternoon, shopkeeper.","नमस्कार दुकानदार जी।","ಶುಭ ಮಧ್ಯಾಹ್ನ ಅಂಗಡಿಯವರೇ."],greetingEvening:["Good evening, shopkeeper.","शुभ संध्या दुकानदार जी।","ಶುಭ ಸಂಜೆ ಅಂಗಡಿಯವರೇ."]
});
Object.assign(T,{
 guideWelcome:["Welcome to KiranaSmart","KiranaSmart में आपका स्वागत है","KiranaSmart ಗೆ ಸ್ವಾಗತ"],guidePurpose:["KiranaSmart calculates each product's remaining usable life and asks you to physically check it at two reminder stages.","KiranaSmart हर उत्पाद की शेष उपयोगी अवधि गिनता है और दो चरणों में स्वयं जाँचने को कहता है।","KiranaSmart ಪ್ರತಿ ಉತ್ಪನ್ನದ ಉಳಿದ ಬಳಕೆಯ ಅವಧಿ ಲೆಕ್ಕಿಸಿ ಎರಡು ಹಂತಗಳಲ್ಲಿ ಪರಿಶೀಲಿಸಲು ಕೇಳುತ್ತದೆ."],
 stepTwo:["Two reminder stages","दो रिमाइंडर चरण","ಎರಡು ಜ್ಞಾಪನೆ ಹಂತಗಳು"],stepThree:["Respond after checking","जाँच के बाद जवाब दें","ಪರಿಶೀಲಿಸಿದ ನಂತರ ಪ್ರತಿಕ್ರಿಯಿಸಿ"],
 howToLog:["Two individual reminders","दो अलग-अलग रिमाइंडर","ಎರಡು ಪ್ರತ್ಯೇಕ ಜ್ಞಾಪನೆಗಳು"],howToLogCopy:["Every product uses its own manufacturing and expiry dates. Respond separately when 50% and 25% of usable life remain.","हर उत्पाद की निर्माण और समाप्ति तिथि अलग होती है। 50% और 25% शेष होने पर अलग-अलग जवाब दें।","ಪ್ರತಿ ಉತ್ಪನ್ನದ ತಯಾರಿಕೆ ಮತ್ತು ಅವಧಿ ದಿನಾಂಕ ಪ್ರತ್ಯೇಕ. 50% ಮತ್ತು 25% ಉಳಿದಾಗ ಪ್ರತ್ಯೇಕವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸಿ."],
 readyTitle:["Ready to track expiry reminders","समाप्ति रिमाइंडर के लिए तैयार","ಅವಧಿ ಜ್ಞಾಪನೆಗೆ ಸಿದ್ಧ"],readyCopy:["Add products with their manufacturing date, expiry date and quantity. Keep this page open for best-effort browser notifications.","निर्माण, समाप्ति और मात्रा सहित उत्पाद जोड़ें। ब्राउज़र सूचनाओं के सर्वोत्तम प्रयास के लिए पेज खुला रखें।","ತಯಾರಿಕೆ, ಅವಧಿ ಮತ್ತು ಪ್ರಮಾಣದೊಂದಿಗೆ ಉತ್ಪನ್ನ ಸೇರಿಸಿ. ಬ್ರೌಸರ್ ಅಧಿಸೂಚನೆಗಾಗಿ ಪುಟ ತೆರೆದಿಡಿ."],
 guideTitle:["Check and respond at both stages","दोनों चरणों पर जाँचें और जवाब दें","ಎರಡೂ ಹಂತಗಳಲ್ಲಿ ಪರಿಶೀಲಿಸಿ ಪ್ರತಿಕ್ರಿಯಿಸಿ"],
 tagline:["Independent expiry reminders · shopkeeper verifies","स्वतंत्र समाप्ति रिमाइंडर · दुकानदार जाँचें","ಸ್ವತಂತ್ರ ಅವಧಿ ಜ್ಞಾಪನೆ · ಅಂಗಡಿಯವರು ಪರಿಶೀಲಿಸಿ"],
 stock:["Products","उत्पाद","ಉತ್ಪನ್ನಗಳು"],onhand:["Current quantity","वर्तमान मात्रा","ಪ್ರಸ್ತುತ ಪ್ರಮಾಣ"],
 add:["Add product","उत्पाद जोड़ें","ಉತ್ಪನ್ನ ಸೇರಿಸಿ"],bats:["Products","उत्पाद","ಉತ್ಪನ್ನಗಳು"],prods:["Products","उत्पाद","ಉತ್ಪನ್ನಗಳು"],
 mfg:["Manufacturing date","निर्माण तिथि","ತಯಾರಿಕಾ ದಿನಾಂಕ"],mfgHint:["Required to calculate this product's individual 50% and 25% reminders.","इस उत्पाद के अलग 50% और 25% रिमाइंडर के लिए ज़रूरी।","ಈ ಉತ್ಪನ್ನದ ಪ್ರತ್ಯೇಕ 50% ಮತ್ತು 25% ಜ್ಞಾಪನೆ ಲೆಕ್ಕಿಸಲು ಅಗತ್ಯ."],
 formIntro:["Register a product. Name, quantity, manufacturing date and expiry date are required.","उत्पाद दर्ज करें। नाम, मात्रा, निर्माण और समाप्ति तिथि ज़रूरी हैं।","ಉತ್ಪನ್ನ ನೋಂದಾಯಿಸಿ. ಹೆಸರು, ಪ್ರಮಾಣ, ತಯಾರಿಕೆ ಮತ್ತು ಅವಧಿ ದಿನಾಂಕ ಅಗತ್ಯ."],
 quantity:["Product quantity","उत्पाद की मात्रा","ಉತ್ಪನ್ನದ ಪ್ರಮಾಣ"],productCard:["Product details","उत्पाद विवरण","ಉತ್ಪನ್ನ ವಿವರಗಳು"],productHint:["Enter the product details for this reminder record.","इस रिमाइंडर रिकॉर्ड के लिए उत्पाद विवरण भरें।","ಈ ಜ್ಞಾಪನೆ ದಾಖಲೆಗೆ ಉತ್ಪನ್ನ ವಿವರ ನಮೂದಿಸಿ."],
 stockCard:["Quantity & expiry","मात्रा और समाप्ति","ಪ್ರಮಾಣ ಮತ್ತು ಅವಧಿ"],stockHint:["Enter the recorded quantity and expiry date.","दर्ज मात्रा और समाप्ति तिथि भरें।","ದಾಖಲಿಸಿದ ಪ್ರಮಾಣ ಮತ್ತು ಅವಧಿ ದಿನಾಂಕ ನಮೂದಿಸಿ."],
 expiryHelp:["Expiry date must be later than manufacturing date.","समाप्ति तिथि निर्माण तिथि के बाद होनी चाहिए।","ಅವಧಿ ದಿನಾಂಕ ತಯಾರಿಕಾ ದಿನಾಂಕದ ನಂತರ ಇರಬೇಕು."], r1:["50% usable life remains. Physically check this product.","50% उपयोगी अवधि शेष। उत्पाद को स्वयं जाँचें।","50% ಬಳಕೆಯ ಅವಧಿ ಉಳಿದಿದೆ. ಉತ್ಪನ್ನವನ್ನು ಪರಿಶೀಲಿಸಿ."],
 r2:["25% usable life remains. Physically check this product.","25% उपयोगी अवधि शेष। उत्पाद को स्वयं जाँचें।","25% ಬಳಕೆಯ ಅವಧಿ ಉಳಿದಿದೆ. ಉತ್ಪನ್ನವನ್ನು ಪರಿಶೀಲಿಸಿ."],
 await:["Pending shopkeeper responses","दुकानदार के जवाब बाकी","ಅಂಗಡಿಯವರ ಪ್ರತಿಕ್ರಿಯೆ ಬಾಕಿ"],rlog:["Reminder & response history","रिमाइंडर और जवाब का इतिहास","ಜ್ಞಾಪನೆ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ ಇತಿಹಾಸ"],
 verify:["Respond to reminder","रिमाइंडर का जवाब दें","ಜ್ಞಾಪನೆಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಿ"],avail:["There — checked and available","मौजूद — जाँचकर उपलब्ध","ಇದೆ — ಪರಿಶೀಲಿಸಿ ಲಭ್ಯವೆಂದು ದೃಢಪಡಿಸಲಾಗಿದೆ"],
 part:["Few left","कुछ बचे हैं","ಕೆಲವೇ ಉಳಿದಿವೆ"],sold:["All are sold","सब बिक गए","ಎಲ್ಲವೂ ಮಾರಾಟವಾಗಿವೆ"],removed:["Manually removed","खुद हटाया","ಕೈಯಾರೆ ಟ್ರ್ಯಾಕಿಂಗ್‌ನಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ"],
 errd:["Enter valid dates; manufacturing date must be earlier than expiry date.","सही तारीखें भरें; निर्माण तिथि समाप्ति से पहले होनी चाहिए।","ಸರಿಯಾದ ದಿನಾಂಕ ನಮೂದಿಸಿ; ತಯಾರಿಕಾ ದಿನಾಂಕ ಅವಧಿಗಿಂತ ಮೊದಲು ಇರಬೇಕು."],
 errr:["Enter a product name, valid dates and a positive whole-number quantity.","उत्पाद का नाम, सही तारीखें और धनात्मक पूर्णांक मात्रा भरें।","ಉತ್ಪನ್ನದ ಹೆಸರು, ಸರಿಯಾದ ದಿನಾಂಕ ಮತ್ತು ಧನಾತ್ಮಕ ಪೂರ್ಣಾಂಕ ಪ್ರಮಾಣ ನಮೂದಿಸಿ."],
 stage50:["50% remaining","50% शेष","50% ಉಳಿದಿದೆ"],stage25:["25% remaining","25% शेष","25% ಉಳಿದಿದೆ"],pending:["Pending","बाकी","ಬಾಕಿ"],responded:["Responded","जवाब दिया","ಪ್ರತಿಕ್ರಿಯಿಸಲಾಗಿದೆ"],
 there:["There","मौजूद है","ಇದೆ"],few:["Few left","कुछ बचे हैं","ಕೆಲವೇ ಉಳಿದಿವೆ"],allSold:["All are sold","सब बिक गए","ಎಲ್ಲವೂ ಮಾರಾಟವಾಗಿವೆ"],
 responseQty:["Actual remaining quantity","वास्तविक बची मात्रा","ನಿಜವಾಗಿ ಉಳಿದ ಪ್ರಮಾಣ"],cancel:["Cancel","रद्द करें","ರದ್ದುಮಾಡಿ"],
 noPending:["No pending responses.","कोई जवाब बाकी नहीं।","ಯಾವುದೇ ಪ್ರತಿಕ್ರಿಯೆ ಬಾಕಿ ಇಲ್ಲ."],removeConfirm:["Remove this product from active reminder tracking? Its history will be kept.","इस उत्पाद को सक्रिय रिमाइंडर ट्रैकिंग से हटाएँ? इसका इतिहास सुरक्षित रहेगा।","ಈ ಉತ್ಪನ್ನವನ್ನು ಸಕ್ರಿಯ ಜ್ಞಾಪನೆ ಟ್ರ್ಯಾಕಿಂಗ್‌ನಿಂದ ತೆಗೆದುಹಾಕಬೇಕೆ? ಇತಿಹಾಸ ಉಳಿಯುತ್ತದೆ."],
 responseQtyError:["Enter a positive whole number no greater than the recorded quantity.","दर्ज मात्रा से अधिक नहीं, धनात्मक पूर्णांक भरें।","ದಾಖಲಿಸಿದ ಪ್ರಮಾಣಕ್ಕಿಂತ ಹೆಚ್ಚಿಲ್ಲದ ಧನಾತ್ಮಕ ಪೂರ್ಣಾಂಕ ನಮೂದಿಸಿ."],
 dashboardPrompt:["KiranaSmart reminds you; physically verify each product and respond at both stages.","KiranaSmart याद दिलाता है; हर उत्पाद स्वयं जाँचें और दोनों चरणों में जवाब दें।","KiranaSmart ಜ್ಞಾಪಿಸುತ್ತದೆ; ಪ್ರತಿ ಉತ್ಪನ್ನವನ್ನು ಪರಿಶೀಲಿಸಿ ಎರಡೂ ಹಂತಗಳಲ್ಲಿ ಪ್ರತಿಕ್ರಿಯಿಸಿ."],
 countProducts:["Total registered products","कुल दर्ज उत्पाद","ಒಟ್ಟು ನೋಂದಾಯಿಸಿದ ಉತ್ಪನ್ನಗಳು"],approaching50:["At or below 50% remaining","50% या कम शेष","50% ಅಥವಾ ಕಡಿಮೆ ಉಳಿದಿದೆ"],approaching25:["At or below 25% remaining","25% या कम शेष","25% ಅಥವಾ ಕಡಿಮೆ ಉಳಿದಿದೆ"],recentAck:["Recently acknowledged","हाल के जवाब","ಇತ್ತೀಚಿನ ಪ್ರತಿಕ್ರಿಯೆಗಳು"],
 noReminder:["No reminder available","रिमाइंडर उपलब्ध नहीं","ಜ್ಞಾಪನೆ ಲಭ್ಯವಿಲ್ಲ"],neutralHelp:["A valid manufacturing date is needed for individual life calculations. Records are not removed automatically.","अलग अवधि गणना के लिए सही निर्माण तिथि ज़रूरी है। रिकॉर्ड अपने आप नहीं हटते।","ಪ್ರತ್ಯೇಕ ಅವಧಿ ಲೆಕ್ಕಕ್ಕೆ ಸರಿಯಾದ ತಯಾರಿಕಾ ದಿನಾಂಕ ಅಗತ್ಯ. ದಾಖಲೆಗಳು ತಾನಾಗಿಯೇ ಅಳಿಸುವುದಿಲ್ಲ."],
 recentTitle:["Recently added products","हाल में जोड़े उत्पाद","ಇತ್ತೀಚೆಗೆ ಸೇರಿಸಿದ ಉತ್ಪನ್ನಗಳು"],recentHelp:["Choose a previously entered product to reuse its name and brand.","पहले भरे उत्पाद को नाम और ब्रांड दोबारा इस्तेमाल करने चुनें।","ಹಿಂದೆ ನಮೂದಿಸಿದ ಉತ್ಪನ್ನದ ಹೆಸರು ಮತ್ತು ಬ್ರಾಂಡ್ ಮರುಬಳಸಲು ಆಯ್ಕೆಮಾಡಿ."],
 empty:["No products yet. Add your first product.","अभी कोई उत्पाद नहीं। पहला उत्पाद जोड़ें।","ಇನ್ನೂ ಉತ್ಪನ್ನಗಳಿಲ್ಲ. ಮೊದಲ ಉತ್ಪನ್ನ ಸೇರಿಸಿ."],search:["Search product or brand","उत्पाद या ब्रांड खोजें","ಉತ್ಪನ್ನ ಅಥವಾ ಬ್ರಾಂಡ್ ಹುಡುಕಿ"],
 days:["days remaining","दिन शेष","ದಿನ ಉಳಿದಿದೆ"],remove:["Remove from tracking","ट्रैकिंग से हटाएँ","ಟ್ರ್ಯಾಕಿಂಗ್‌ನಿಂದ ತೆಗೆದುಹಾಕಿ"],recorded:["Recorded","दर्ज","ದಾಖಲಿಸಲಾಗಿದೆ"],
 latestReminders:["Upcoming or due reminders","आने वाले या देय रिमाइंडर","ಬರಲಿರುವ ಅಥವಾ ಬಾಕಿ ಜ್ಞಾಪನೆಗಳು"]
});
Object.assign(T,{
 firebaseTitle:["Cloud sync","क्लाउड सिंक","ಕ್ಲೌಡ್ ಸಿಂಕ್"],
 firebaseHelp:["Sign in to sync inventory across your devices.","डिवाइसों पर स्टॉक सिंक करने के लिए साइन इन करें।","ಸಾಧನಗಳಲ್ಲಿ ಸ್ಟಾಕ್ ಸಿಂಕ್ ಮಾಡಲು ಸೈನ್ ಇನ್ ಮಾಡಿ."],
 firebaseSetupMissing:["Firebase is not configured yet. Follow the setup instructions in firebase/README.md.","Firebase अभी सेट नहीं है। firebase/README.md में दिए सेटअप निर्देश देखें।","Firebase ಇನ್ನೂ ಸಿದ್ಧವಾಗಿಲ್ಲ. firebase/README.md ನಲ್ಲಿನ ಸೂಚನೆ ಅನುಸರಿಸಿ."],
 firebaseEmail:["Firebase account email","Firebase खाते का ईमेल","Firebase ಖಾತೆಯ ಇಮೇಲ್"],firebasePassword:["Password","पासवर्ड","ಪಾಸ್‌ವರ್ಡ್"],
 firebaseForgotPassword:["Forgot password?","पासवर्ड भूल गए?","ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?"],firebaseResetSent:["Password reset email sent. Check your inbox.","पासवर्ड रीसेट ईमेल भेजा गया। अपना इनबॉक्स देखें।","ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸುವ ಇಮೇಲ್ ಕಳುಹಿಸಲಾಗಿದೆ. ಇನ್‌ಬಾಕ್ಸ್ ಪರಿಶೀಲಿಸಿ."],
 firebaseSignIn:["Sign in","साइन इन","ಸೈನ್ ಇನ್"],firebaseSignUp:["Create account","खाता बनाएँ","ಖಾತೆ ರಚಿಸಿ"],firebaseSignOut:["Sign out","साइन आउट","ಸೈನ್ ಔಟ್"],
 firebaseEnablePush:["Enable background alerts","बैकग्राउंड अलर्ट चालू करें","ಹಿನ್ನೆಲೆ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಆನ್ ಮಾಡಿ"],firebaseDisablePush:["Disable this device's alerts","इस डिवाइस के अलर्ट बंद करें","ಈ ಸಾಧನದ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಆಫ್ ಮಾಡಿ"],
 firebaseSync:["Sync cloud inventory now","क्लाउड स्टॉक अभी सिंक करें","ಕ್ಲೌಡ್ ಸ್ಟಾಕ್ ಈಗ ಸಿಂಕ್ ಮಾಡಿ"],
 firebasePushHelp:["After the scheduled backend is deployed, push checks run at 8:00 AM, a 1:00 PM follow-up, then at most once each morning until checked, in each store's timezone. Delivery and vibration depend on Android/browser settings.","शेड्यूलर तैनात होने के बाद पुश जाँच हर दुकान के समय क्षेत्र में सुबह 8 बजे, दोपहर 1 बजे फॉलो-अप और फिर जाँच होने तक रोज़ सुबह होती है। डिलीवरी और कंपन Android/ब्राउज़र सेटिंग पर निर्भर हैं।","ಶೆಡ್ಯೂಲರ್ ನಿಯೋಜಿಸಿದ ಬಳಿಕ ಪುಶ್ ಪರಿಶೀಲನೆ ಪ್ರತಿ ಅಂಗಡಿಯ ಸಮಯ ವಲಯದಲ್ಲಿ ಬೆಳಿಗ್ಗೆ 8, ಮಧ್ಯಾಹ್ನ 1ಕ್ಕೆ ಫಾಲೋ-ಅಪ್, ನಂತರ ಪರಿಶೀಲಿಸುವವರೆಗೆ ದಿನಕ್ಕೊಮ್ಮೆ ನಡೆಯುತ್ತದೆ. ತಲುಪುವಿಕೆ ಮತ್ತು ಕಂಪನ Android/ಬ್ರೌಸರ್ ಸೆಟ್ಟಿಂಗ್ ಮೇಲೆ ಅವಲಂಬಿತ."],
 firebaseBackgroundUnavailable:["Cross-device sync can be used without scheduled alerts. Background alerts require a deployed scheduled backend and Firebase Blaze billing; no alerts will be sent until both are enabled.","शेड्यूल अलर्ट के बिना भी डिवाइसों के बीच सिंक हो सकता है। बैकग्राउंड अलर्ट के लिए शेड्यूलर और Firebase Blaze बिलिंग चाहिए; दोनों चालू होने तक अलर्ट नहीं भेजे जाएँगे।","ನಿಗದಿತ ಎಚ್ಚರಿಕೆಗಳಿಲ್ಲದೆಯೂ ಸಾಧನಗಳ ನಡುವೆ ಸಿಂಕ್ ಬಳಸಬಹುದು. ಹಿನ್ನೆಲೆ ಎಚ್ಚರಿಕೆಗೆ ನಿಯೋಜಿತ ಶೆಡ್ಯೂಲರ್ ಮತ್ತು Firebase Blaze ಬಿಲ್ಲಿಂಗ್ ಅಗತ್ಯ; ಎರಡೂ ಸಕ್ರಿಯವಾಗುವವರೆಗೆ ಎಚ್ಚರಿಕೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ."],
 firebaseSecureContext:["Background notifications require the app to be hosted on HTTPS and opened in a supported browser.","बैकग्राउंड सूचनाओं के लिए ऐप HTTPS पर होस्ट होना और समर्थित ब्राउज़र में खुलना ज़रूरी है।","ಹಿನ್ನೆಲೆ ಅಧಿಸೂಚನೆಗೆ ಆ್ಯಪ್ HTTPS ನಲ್ಲಿ ಹೋಸ್ಟ್ ಆಗಿ ಬೆಂಬಲಿತ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ತೆರೆಯಬೇಕು."],
 firebaseUnsupported:["Push notifications are not supported by this browser.","इस ब्राउज़र में पुश सूचनाएँ समर्थित नहीं हैं।","ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಪುಶ್ ಅಧಿಸೂಚನೆ ಬೆಂಬಲಿತವಲ್ಲ."],
 firebasePushOn:["Background alerts enabled on this device.","इस डिवाइस पर बैकग्राउंड अलर्ट चालू हैं।","ಈ ಸಾಧನದಲ್ಲಿ ಹಿನ್ನೆಲೆ ಎಚ್ಚರಿಕೆಗಳು ಸಕ್ರಿಯವಾಗಿವೆ."],
 firebasePushOff:["Background alerts disabled on this device.","इस डिवाइस पर बैकग्राउंड अलर्ट बंद हैं।","ಈ ಸಾಧನದಲ್ಲಿ ಹಿನ್ನೆಲೆ ಎಚ್ಚರಿಕೆಗಳು ನಿಷ्क್ರಿಯವಾಗಿವೆ."],
 firebaseSaved:["Cloud inventory synced.","क्लाउड स्टॉक सिंक हो गया।","ಕ್ಲೌಡ್ ಸ್ಟಾಕ್ ಸಿಂಕ್ ಆಯಿತು."],
 firebaseOffline:["Cloud sync failed; this device's local inventory is preserved.","क्लाउड सिंक विफल; इस डिवाइस का स्टॉक सुरक्षित है।","ಕ್ಲೌಡ್ ಸಿಂಕ್ ವಿಫಲ; ಈ ಸಾಧನದ ಸ್ಟಾಕ್ ಉಳಿಸಲಾಗಿದೆ."],
 appWorkerUnavailable:["The optional offline worker could not be registered; cloud sync can still work.","वैकल्पिक ऑफ़लाइन वर्कर शुरू नहीं हो सका; क्लाउड सिंक फिर भी काम कर सकता है।","ಐಚ್ಛಿಕ ಆಫ್‌ಲೈನ್ ವರ್ಕರ್ ನೋಂದಣಿಯಾಗಲಿಲ್ಲ; ಕ್ಲೌಡ್ ಸಿಂಕ್ ಇನ್ನೂ ಕೆಲಸ ಮಾಡಬಹುದು."],
 currentStore:["Current store","वर्तमान दुकान","ಪ್ರಸ್ತುತ ಅಂಗಡಿ"],addStore:["Add store","दुकान जोड़ें","ಅಂಗಡಿ ಸೇರಿಸಿ"],
 renameStore:["Rename store","दुकान का नाम बदलें","ಅಂಗಡಿ ಹೆಸರು ಬದಲಿಸಿ"],storeNameLabel:["Store name","दुकान का नाम","ಅಂಗಡಿ ಹೆಸರು"],
 storeTimezone:["Store timezone","दुकान का समय क्षेत्र","ಅಂಗಡಿಯ ಸಮಯ ವಲಯ"],
 storeTimezoneHelp:["Use an IANA timezone such as Asia/Kolkata. Alerts follow this store's local time.","Asia/Kolkata जैसा IANA समय क्षेत्र भरें। अलर्ट इसी दुकान के स्थानीय समय पर आएँगे।","Asia/Kolkata ನಂತಹ IANA ಸಮಯ ವಲಯ ಬಳಸಿ. ಎಚ್ಚರಿಕೆಗಳು ಈ ಅಂಗಡಿಯ ಸ್ಥಳೀಯ ಸಮಯಕ್ಕೆ ಬರುತ್ತವೆ."],
 storeNameRequired:["Enter a store name.","दुकान का नाम भरें।","ಅಂಗಡಿ ಹೆಸರನ್ನು ನಮೂದಿಸಿ."],
 storeExists:["A store with this name already exists.","इस नाम की दुकान पहले से मौजूद है।","ಈ ಹೆಸರಿನ ಅಂಗಡಿ ಈಗಾಗಲೇ ಇದೆ."],
 storeTimezoneInvalid:["Enter a valid timezone, for example Asia/Kolkata.","सही समय क्षेत्र भरें, जैसे Asia/Kolkata।","ಸರಿಯಾದ ಸಮಯ ವಲಯ ನಮೂದಿಸಿ, ಉದಾ: Asia/Kolkata."],
 switchStoreConfirm:["Discard the unsaved product form and switch stores?","बिना सहेजा उत्पाद फ़ॉर्म छोड़कर दूसरी दुकान पर जाएँ?","ಉಳಿಸದ ಉತ್ಪನ್ನ ಫಾರ್ಮ್ ಬಿಡಿ ಬೇರೆ ಅಂಗಡಿಗೆ ಬದಲಾಯಿಸಬೇಕೆ?"]
});
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let S=null;try{S=JSON.parse(localStorage.getItem('ks'))}catch(e){}
if(!S||!Array.isArray(S.batches))S={lang:'en',theme:'system',batches:[],log:[]};
if(!S.theme)S.theme='system';
if(!Array.isArray(S.log))S.log=[];
if(!['system','light','dark'].includes(S.theme))S.theme='system';
function migrateAcknowledgements(){S.batches.forEach(b=>{if(!b.acks){b.acks={};(b.rem||[]).forEach(k=>{if(k=='r1'||k=='r2')b.acks[k]={sentAt:'',response:null,respondedAt:null,qtyAtResponse:null,updatedQuantity:null}})}})}
migrateAcknowledgements();
function deviceTimeZone(){return Intl.DateTimeFormat().resolvedOptions().timeZone||'Asia/Kolkata'}
function validTimeZone(value){try{Intl.DateTimeFormat('en',{timeZone:value});return value}catch(e){return''}}
function currentStore(){return S.stores.find(store=>store.id==S.activeStoreId)||S.stores[0]}
function storeBatches(id=S.activeStoreId){return S.batches.filter(b=>b.storeId==id)}
function activeBatch(id){return S.batches.find(b=>b.id==id&&b.storeId==S.activeStoreId)}
function ensureStores(){
 const stores=Array.isArray(S.stores)?S.stores.filter(s=>s&&typeof s=='object'&&typeof s.id=='string'&&/^[\w-]{1,80}$/.test(s.id)&&typeof s.name=='string'&&s.name.trim()).map(s=>({...s,name:s.name.trim(),timeZone:validTimeZone(s.timeZone)||deviceTimeZone()})):[];
 if(!stores.length){const id='store-default';stores.push({id,name:String(S.storeName||'My store').trim()||'My store',timeZone:deviceTimeZone()})}
 S.stores=stores;const ids=new Set(stores.map(s=>s.id)),defaultId=stores[0].id;
 S.batches.forEach(b=>{if(!ids.has(b.storeId))b.storeId=defaultId});
 S.log.forEach(l=>{if(!ids.has(l.storeId))l.storeId=defaultId});
 if(!ids.has(S.activeStoreId))S.activeStoreId=defaultId;
 S.storeName=currentStore().name}
ensureStores();
let localSaveFailed=false;
const localInventoryKey=()=>firebaseUser?'ks_user_'+firebaseUser.uid:'ks';
function readLocalInventory(key,fallback){try{const state=JSON.parse(localStorage.getItem(key)||'null');
 if(state&&typeof state=='object'&&Array.isArray(state.batches)){if(!Array.isArray(state.log))state.log=[];return state}}catch(e){}
 return fallback}
function emptyInventoryState(){return{lang:S.lang||'en',theme:S.theme||'system',sound:S.sound,batches:[],log:[],stores:[]}}
function persistLocalState(){try{localStorage.setItem(localInventoryKey(),JSON.stringify(S));if(localSaveFailed){localSaveFailed=false;toast(t('storageSaveRecovered'))}return true}
 catch(e){if(!localSaveFailed){localSaveFailed=true;toast(t('storageSaveFailed'))}return false}}
const save=()=>{const saved=persistLocalState();scheduleFirebaseSync();return saved};
const t=k=>T[k]?T[k][{en:0,hi:1,kn:2}[S.lang]||0]:k;
const ymd=d=>{const z=new Date(d);return z.getFullYear()+'-'+String(z.getMonth()+1).padStart(2,'0')+'-'+String(z.getDate()).padStart(2,'0')};
let tab='dash',editId=null,q='',f='all',err='',pendingProduct=null,expiryFocus='',guideOpen=false,guideStep=0,guideVerified=false,guideStoreDraft='',lastHealthScore=null,healthBaselineSet=false,healthMilestoneThisRender=false,audioContext=null;
let initialBatchId=new URLSearchParams(location.search).get('batchId'),initialStoreId=new URLSearchParams(location.search).get('storeId');
if(initialStoreId&&S.stores.some(store=>store.id==initialStoreId))S.activeStoreId=initialStoreId;
if(initialBatchId&&/^\d+$/.test(initialBatchId)){tab='stock';const batch=S.batches.find(b=>String(b.id)==initialBatchId&&(!initialStoreId||b.storeId==initialStoreId));if(batch){S.activeStoreId=batch.storeId;q=batch.name}}else initialBatchId=null;
try{guideOpen=localStorage.getItem('fa_onboarded')!=='1'}catch(e){}
let supabaseIdentity='',authSession=null,authUser=null,authNotice='',authBusy=false;
let firebaseApp=null,firebaseAuth=null,firebaseDb=null,firebaseMessaging=null,firebaseUser=null,firebaseBusy=false,firebaseNotice='',appWorkerNotice='',firebaseSdkPromise=null,firebaseSyncTimer=null,firebaseSyncing=false,firebaseSyncReady=false,firebaseSyncedBatches=new Map(),firebaseSyncedStores=new Map(),firebaseSyncedLog='',firebaseAuthListenerSet=false;
let firebaseMessageListenerSet=false,firebasePushEnabled=false;
const D=864e5,DONE=['sold','removed','ret','disp','nf'];
function dateValue(value){if(typeof value!='string'||! /^\d{4}-\d{2}-\d{2}$/.test(value))return NaN;const [y,m,d]=value.split('-').map(Number),time=Date.UTC(y,m-1,d);const date=new Date(time);return date.getUTCFullYear()==y&&date.getUTCMonth()==m-1&&date.getUTCDate()==d?time:NaN}
function calc(b){const today=dateValue(ymd(new Date())),expiry=dateValue(b.exp),manufactured=dateValue(b.mfg),days=Math.round((expiry-today)/D); if(!Number.isFinite(expiry)||days<=0)return{days,pct:null,st:0,reason:'after'};
 if(!Number.isFinite(manufactured))return{days,pct:null,st:0,reason:'mfg'};
 const tot=(expiry-manufactured)/D;if(!(tot>0))return{days,pct:null,st:0,reason:'mfg'};
 const pct=days/tot*100,st=pct<=25?3:pct<=50?2:1;
 return{days,pct,st}}
const active=()=>storeBatches().filter(b=>!DONE.includes(b.status));
const stockLeft=b=>Math.max(0,Number.isFinite(Number(b.remaining))?Number(b.remaining):b.ver!=null?Number(b.ver):Number(b.qty)||0);
const lowStock=b=>stockLeft(b)<=Math.max(0,Number(b.min??1)||0);
function freshnessData(){const batches=active(),total=batches.reduce((n,b)=>n+stockLeft(b),0);if(!total)return{score:null,total:0};
 const fresh=batches.reduce((n,b)=>n+(calc(b).st==1?stockLeft(b):0),0);return{score:Math.round(fresh/total*100),total}}
function healthGrade(score){return score>=97?'A+':score>=93?'A':score>=85?'B':score>=70?'C':'D'}
function checkHealthMilestone(){healthMilestoneThisRender=false;const score=freshnessData().score;if(!healthBaselineSet){lastHealthScore=score;healthBaselineSet=true;return}
 if(score===100&&lastHealthScore!==100){fireConfetti();playAudioCue('verify');healthMilestoneThisRender=true}lastHealthScore=score}
function playAudioCue(kind){try{const AudioCtor=window.AudioContext||window.webkitAudioContext;if(!AudioCtor)return;
  if(!audioContext)audioContext=new AudioCtor();if(audioContext.state==='suspended')audioContext.resume();
  const now=audioContext.currentTime,notes=kind==='click'?[660]:[523.25,659.25,783.99];
  notes.forEach((hz,i)=>{const osc=audioContext.createOscillator(),gain=audioContext.createGain(),start=now+i*.09,duration=kind==='click'?.055:.24;
   osc.type='sine';osc.frequency.setValueAtTime(hz,start);gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(kind==='click'?.035:.09,start+.02);
   gain.gain.exponentialRampToValueAtTime(.0001,start+duration);osc.connect(gain);gain.connect(audioContext.destination);osc.start(start);osc.stop(start+duration+.01)})}catch(e){}}
let confettiCtx=null,confettiParts=[],confettiFrame=0,confettiDpr=1;
function resizeConfetti(){const c=$('#confetti');if(!c)return;confettiDpr=Math.min(window.devicePixelRatio||1,2);
 c.width=Math.floor(innerWidth*confettiDpr);c.height=Math.floor(innerHeight*confettiDpr);c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';
 confettiCtx=c.getContext('2d');if(confettiCtx)confettiCtx.setTransform(confettiDpr,0,0,confettiDpr,0,0)}
function fireConfetti(){if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 if(!confettiCtx)resizeConfetti();if(!confettiCtx)return;
 const colors=['#1db954','#f59e0b','#ef4444','#47b7d1','#8b5cf6'];
 for(let i=0;i<90;i++)confettiParts.push({x:innerWidth/2+(Math.random()-.5)*140,y:innerHeight*.38,vx:(Math.random()-.5)*9,vy:-Math.random()*8-2,w:5+Math.random()*6,h:4+Math.random()*5,rot:Math.random()*6.28,spin:(Math.random()-.5)*.24,life:80+Math.random()*40,max:120,color:colors[i%colors.length]});
 if(!confettiFrame)confettiFrame=requestAnimationFrame(drawConfetti)}
function drawConfetti(){if(!confettiCtx)return;confettiCtx.clearRect(0,0,innerWidth,innerHeight);
 for(let i=confettiParts.length-1;i>=0;i--){const p=confettiParts[i];p.vx*=.988;p.vy=p.vy*.995+.13;p.x+=p.vx;p.y+=p.vy;p.rot+=p.spin;p.life--;
  if(p.life<=0||p.y>innerHeight+30){confettiParts.splice(i,1);continue}
  confettiCtx.save();confettiCtx.globalAlpha=Math.min(1,p.life/p.max);confettiCtx.translate(p.x,p.y);confettiCtx.rotate(p.rot);confettiCtx.fillStyle=p.color;confettiCtx.fillRect(-p.w/2,-p.h/2,p.w,p.h);confettiCtx.restore()}
 if(confettiParts.length)confettiFrame=requestAnimationFrame(drawConfetti);else{confettiFrame=0;confettiCtx.clearRect(0,0,innerWidth,innerHeight)}}
window.addEventListener('resize',resizeConfetti);
function toast(m){if(localSaveFailed&&m==t('ok'))m=t('storageSaveFailed');const e=$('#toast');e.textContent=m;e.style.display='block';clearTimeout(toast.h);toast.h=setTimeout(()=>e.style.display='none',3500)}
function setTheme(mode){S.theme=mode;save();render()}
function changeQty(delta){const input=$('#f_qty');if(input)input.value=String(Math.max(1,Math.min(999,(parseInt(input.value,10)||1)+delta)))}
async function copyBackup(){const e=$('#bk');if(!e)return;try{await navigator.clipboard.writeText(e.value);toast(t('ok'))}
 catch(ex){e.focus();e.select();toast(t('copyFallback'))}}
function fire(b,k){const stage=k=='r1'?50:25,when=new Date().toLocaleString(),c=calc(b);
 b.acks=b.acks||{};b.acks[k]={sentAt:when,response:null,respondedAt:null,qtyAtResponse:null,updatedQuantity:null};
 b.rem=b.rem||[];if(!b.rem.includes(k))b.rem.push(k);
 const store=S.stores.find(s=>s.id==b.storeId);S.log.unshift({id:b.id,storeId:b.storeId,name:b.name,no:b.no,k,at:when,kind:'reminder'});
 const m=(store?store.name+' · ':'')+b.name+': '+stage+'% remaining · '+stockLeft(b)+' · '+t('ex')+' '+b.exp+' · '+c.days+' '+t('days');toast(m);
 try{if(!firebasePushEnabled&&window.Notification&&Notification.permission==='granted')new Notification('KiranaSmart · '+(store?store.name:''),{body:m})}catch(e){}}
function reminders(){S.batches.filter(b=>!DONE.includes(b.status)).forEach(b=>{b.rem=b.rem||[];b.acks=b.acks||{};const c=calc(b);
 if(c.st>=2&&!b.acks.r1)fire(b,'r1');
 if(c.st>=3&&!b.acks.r2)fire(b,'r2')})}
function reminderRows(b){return ['r1','r2'].map(k=>{const a=b.acks&&b.acks[k];if(!a)return'';const label=t(k),stage=k=='r1'?t('stage50'):t('stage25');
 const status=a.response?`${t('responded')}: ${t(a.response=='there'?'there':a.response=='few'?'few':'allSold')}`:t('pending');
 return `<div class="card n"><div class="row"><b>${stage}</b><span class="chip ${a.response?'g':'y'}">${status}</span></div><div class="mut">${esc(a.sentAt||'')}</div>${a.response?`<div class="mut">${t('q')}: ${a.qtyAtResponse??'—'}${a.updatedQuantity!=null?' · '+t('verq')+': '+a.updatedQuantity:''} · ${esc(a.respondedAt||'')}</div>`:`<div class="acts"><button class="sm" onclick="openV(${b.id},'${k}')">${t('verify')}</button></div>`}</div>`}).join('')}
function card(b,h,compact=false){const c=calc(b),cl=h?'':c.st?['','g','y','r'][c.st]:'n';
 const txt=c.st===0?(c.reason==='after'?'':t('needMfg')):Math.round(c.pct)+t('left')+' · '+c.days+' '+t('days');
 const chip=h?`<span class="chip n">${t(b.status)}</span>`:c.st===0?`<span class="chip n">${t('noReminder')}</span>`:`<span class="chip ${cl}">${t(cl)}</span>`;
 let x=`<div class="card ${cl}"><div class="row"><div><b>${esc(b.name)}</b> <span class="mut">${esc(b.brand||'')}</span><br><span class="mut">${t('onhand')}: ${stockLeft(b)} · ${t('bno')}: ${esc(b.no||'—')} · ${t('mfg')}: ${esc(b.mfg||'—')} · ${t('ex')}: ${esc(b.exp)}</span></div>${chip}</div>`;
 if(!h&&txt)x+=`<div>${txt}</div>`;
 if(b.acks&&Object.keys(b.acks).length)x+=reminderRows(b);
 if(b.hist&&b.hist.length)x+=`<div class="mut">${b.hist.slice(-3).map(e=>esc(e)).join('<br>')}</div>`;
 if(!h)x+=`<div class="acts"><button class="sm s" onclick="editId=${b.id};go('add')">${t('edit')}</button><button class="sm s" onclick="removeTracking(${b.id})">${t('remove')}</button></div>`;
 return x+'</div>'}
function recentProducts(){const seen=new Set(),items=[];
 [...storeBatches()].reverse().forEach(b=>{const name=String(b.name||'').trim();if(!name)return;const brand=String(b.brand||'').trim(),key=name.toLowerCase()+'|'+brand.toLowerCase();
  if(seen.has(key))return;seen.add(key);items.push({name,brand,cat:b.cat||'',min:b.min??1,price:b.price??0})});
 return items.slice(0,4)}
function chooseRecentProduct(index){if(editId!=null)return;const item=recentProducts()[index];if(!item)return;
 pendingProduct=item;err='';render()}
function greetingKey(){const hour=new Date().getHours();return hour<12?'greetingMorning':hour<17?'greetingAfternoon':'greetingEvening'}
function setGuideBackground(hidden){['header','#main','#nav'].forEach(sel=>{const el=$(sel);el.inert=hidden;if(hidden)el.setAttribute('aria-hidden','true');else el.removeAttribute('aria-hidden')})}
function openGuide(){guideOpen=true;guideStep=0;guideVerified=true;guideStoreDraft=currentStore().name||'';setGuideBackground(true);renderGuide()}
function finishGuide(){const name=$('#guideStoreName');if(name)guideStoreDraft=name.value;const storeName=guideStoreDraft.trim();if(storeName)currentStore().name=storeName;S.storeName=currentStore().name;save();
 try{localStorage.setItem('fa_onboarded','1')}catch(e){}
 guideOpen=false;$('#onboarding').hidden=true;document.body.style.overflow='';setGuideBackground(false);render();$('#main').focus()}
function renderGuide(){if(!guideOpen)return;const overlay=$('#onboarding');if(!overlay)return;overlay.hidden=false;document.body.style.overflow='hidden';
 const labels=['stepOne','stepTwo','stepThree','stepFour'],stepLabel=t(labels[guideStep]).toUpperCase(),stepName=t('guideStep').replace('{n}',String(guideStep+1));
 let content='';
 if(guideStep===0)content=`<div class="hero-logo-wrap" aria-hidden="true"><span class="hero-ring"></span><span class="hero-ring"></span><span class="hero-logo">KS</span></div><div class="warm-greeting"><p>${t(greetingKey())}</p><h2 id="guideHeading">${t('guideWelcome')}</h2></div><p>${t('guidePurpose')}</p>`;
 if(guideStep===1)content=`<h2 id="guideHeading">${t('howToLog')}</h2><p>${t('howToLogCopy')}</p><h3>${t('stepTwo')}</h3><div class="risk-demo">
  <div class="risk-demo-row y"><span class="risk-demo-dot" aria-hidden="true">50%</span><div><b>${t('stage50')}</b><div class="mut">${t('r1')}</div></div></div>
  <div class="risk-demo-row r"><span class="risk-demo-dot" aria-hidden="true">25%</span><div><b>${t('stage25')}</b><div class="mut">${t('r2')}</div></div></div></div>`;
 if(guideStep===2)content=`<h2 id="guideHeading">${t('stepThree')}</h2><p>${t('practiceCopy')}</p><div class="practice-card"><span class="sample-icon" aria-hidden="true">🥛</span><h3>${t('sampleProduct')}</h3><p>${t('there')}</p><p>${t('few')} — ${t('responseQty')}</p><p>${t('allSold')} — ${t('afterDate')}</p></div>`;
 if(guideStep===3)content=`<h2 id="guideHeading">${t('readyTitle')}</h2><p>${t('readyCopy')}</p><div class="guide-ready"><span class="ready-check" aria-hidden="true">✓</span><b>${t('guideTitle')}</b></div><label for="guideStoreName">${t('storeName')}</label><input id="guideStoreName" class="guide-store-name" type="text" maxlength="60" placeholder="${esc(t('storeNamePlaceholder'))}" value="${esc(guideStoreDraft)}" oninput="guideStoreDraft=this.value">`;
 const nextLabel=guideStep===3?t('startShop'):t('next');
 overlay.innerHTML=`<section class="guide-card" role="dialog" aria-modal="true" aria-labelledby="guideHeading" tabindex="-1"><div class="guide-top"><div><div class="guide-step-label">${stepLabel}</div><span class="mut">${stepName}</span></div><div class="guide-progress" aria-hidden="true">${labels.map((_,i)=>`<i class="${i<=guideStep?'active':''}"></i>`).join('')}</div><div class="guide-language"><select aria-label="${t('lang')}" onchange="S.lang=this.value;save();render();renderGuide()"><option value="en" ${S.lang=='en'?'selected':''}>English</option><option value="hi" ${S.lang=='hi'?'selected':''}>हिन्दी</option><option value="kn" ${S.lang=='kn'?'selected':''}>ಕನ್ನಡ</option></select></div></div>
  ${content}<div class="guide-actions"><button class="s sm" onclick="skipGuide()">${t('skip')}</button><div class="guide-actions-right">${guideStep?`<button class="s sm" onclick="guideStep--;renderGuide()">${t('back')}</button>`:''}<button onclick="${guideStep===3?'finishGuide()':'guideStep++;renderGuide()'}">${nextLabel}</button></div></div></section>`;
 overlay.querySelector('.guide-card').focus()}
function skipGuide(){if(guideStep===3)finishGuide();else{try{localStorage.setItem('fa_onboarded','1')}catch(e){}guideOpen=false;$('#onboarding').hidden=true;document.body.style.overflow='';setGuideBackground(false);render()}}
function horizonDay(date){expiryFocus=date;tab='stock';render();scrollTo(0,0)}
function clearExpiryFocus(){expiryFocus='';render()}
function accountPanel(){const url=localStorage.getItem('freshalert_supabase_url')||'',key=localStorage.getItem('freshalert_supabase_key')||'';
 if(!url||!key)return '';
 const auth=authUser?`<div class="settings-card"><div class="settings-copy"><b>${t('backupAccount')} ${esc(authUser.email||'')}</b></div><div class="acts">
 <button class="sm" onclick="askCloud('upload')" ${authBusy?'disabled':''}>${t('uploadCloud')}</button><button class="s sm" onclick="askCloud('restore')" ${authBusy?'disabled':''}>${t('restoreCloud')}</button><button class="s sm" onclick="signOut()" ${authBusy?'disabled':''}>${t('signOut')}</button></div></div>`:
 `<div class="settings-card"><label for="auth_email">${t('email')}</label><input id="auth_email" type="email" autocomplete="email" inputmode="email">
 <label for="auth_password">${t('password')}</label><input id="auth_password" type="password" autocomplete="current-password">
 <div class="acts"><button onclick="accountAction('signin')" ${authBusy?'disabled':''}>${t('signIn')}</button><button class="s" onclick="accountAction('signup')" ${authBusy?'disabled':''}>${t('createAccount')}</button></div></div>`;
 return `<section class="settings-group"><h2>${t('account')}</h2><p class="form-hint">${t('accountHelp')}</p>
 <div class="settings-card"><label for="sb_url">${t('projectUrl')}</label><input id="sb_url" type="url" autocomplete="off" value="${esc(url)}">
 <label for="sb_key">${t('publicKey')}</label><input id="sb_key" type="password" autocomplete="off" value="${esc(key)}">
 <div class="acts"><button class="s sm" onclick="saveSupabaseConfig()" ${authBusy?'disabled':''}>${t('saveConfig')}</button></div><p class="form-hint">${t('keyNotice')}</p></div>
 ${auth}<p id="authStatus" class="form-hint" role="status" aria-live="polite">${authBusy?t('working'):esc(authNotice)}</p></section>`}
function storeSwitcher(){return `<section class="card store-switch"><div class="row"><label for="activeStore">${t('currentStore')}<select id="activeStore" onchange="switchStore(this.value)">${S.stores.map(store=>{
 const pending=storeBatches(store.id).reduce((n,b)=>n+['r1','r2'].filter(k=>b.acks&&b.acks[k]&&!b.acks[k].response).length,0);
 return `<option value="${esc(store.id)}" ${store.id==S.activeStoreId?'selected':''}>${esc(store.name)}${pending?' · '+pending+' '+t('pending'):''}</option>`}).join('')}</select></label>
 <div class="acts"><button class="sm" onclick="openStoreDialog('new')">${t('addStore')}</button><button class="s sm" onclick="openStoreDialog('rename')">${t('renameStore')}</button></div></div></section>`}
function switchStore(id){if(!S.stores.some(store=>store.id==id))return;
 if(tab=='add'&&!window.confirm(t('switchStoreConfirm'))){render();return}
 S.activeStoreId=id;S.storeName=currentStore().name;tab='stock';editId=null;pendingProduct=null;err='';q='';initialBatchId=null;initialStoreId=null;
 history.replaceState(null,'',location.pathname);save();render();scrollTo(0,0)}
function openStoreDialog(mode){const store=currentStore(),isNew=mode=='new';
 mod(`<b>${isNew?t('addStore'):t('renameStore')}</b><label for="storeNameInput">${t('storeNameLabel')}</label><input id="storeNameInput" type="text" maxlength="60" autocomplete="off" value="${isNew?'':esc(store.name)}">
 <label for="storeTimezoneInput">${t('storeTimezone')}</label><input id="storeTimezoneInput" type="text" maxlength="80" autocomplete="off" value="${esc(store.timeZone||deviceTimeZone())}"><small class="mut">${t('storeTimezoneHelp')}</small>
 <div class="acts"><button onclick="saveStoreRecord('${mode}')">${t('save')}</button><button class="s" onclick="mod()">${t('cancel')}</button></div>`)}
function saveStoreRecord(mode){const name=$('#storeNameInput').value.trim(),zoneInput=$('#storeTimezoneInput').value.trim(),zone=validTimeZone(zoneInput);
 if(!name){toast(t('storeNameRequired'));return}
 if(!zone){toast(t('storeTimezoneInvalid'));return}
 const existing=S.stores.find(store=>store.id!=S.activeStoreId&&store.name.toLowerCase()==name.toLowerCase());
 if(existing){toast(t('storeExists'));return}
 if(mode=='new'){let id;do{id='store-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8)}while(S.stores.some(store=>store.id==id));
  S.stores.push({id,name,timeZone:zone,_updatedAt:Date.now()});S.activeStoreId=id;tab='stock';q='';initialBatchId=null;initialStoreId=null}
 else{const store=currentStore();store.name=name;store.timeZone=zone;store._updatedAt=Date.now()}
 S.storeName=currentStore().name;save();mod();render();toast(t('ok'))}
function firebaseAccountPanel(){const ready=firebaseConfigReady();if(!ready)return '';
 const backgroundReady=firebaseBackgroundAlertsReady(),auth=firebaseUser?
 `<div class="settings-card"><div class="settings-copy"><b>${esc(firebaseUser.email||'')}</b><p>${t('firebaseHelp')}</p></div><div class="acts">
 ${backgroundReady?`<button class="sm" onclick="enableFirebasePush()" ${firebaseBusy||!ready?'disabled':''}>${t('firebaseEnablePush')}</button>`:''}
 ${firebasePushEnabled?`<button class="s sm" onclick="disableFirebasePush()" ${firebaseBusy?'disabled':''}>${t('firebaseDisablePush')}</button>`:''}
 <button class="s sm" onclick="syncFirebaseNow()" ${firebaseBusy?'disabled':''}>${t('firebaseSync')}</button>
 <button class="s sm" onclick="firebaseSignOut()" ${firebaseBusy?'disabled':''}>${t('firebaseSignOut')}</button></div></div>`:
 `<div class="settings-card"><label for="fb_email">${t('firebaseEmail')}</label><input id="fb_email" type="email" autocomplete="email" inputmode="email">
 <label for="fb_password">${t('firebasePassword')}</label><input id="fb_password" type="password" autocomplete="current-password">
 <div class="acts"><button onclick="firebaseAccountAction('signin')" ${firebaseBusy||!ready?'disabled':''}>${t('firebaseSignIn')}</button>
 <button class="s" onclick="firebaseAccountAction('signup')" ${firebaseBusy||!ready?'disabled':''}>${t('firebaseSignUp')}</button>
 <button class="s sm" onclick="firebasePasswordReset()" ${firebaseBusy||!ready?'disabled':''}>${t('firebaseForgotPassword')}</button></div></div>`;
 return `<section class="settings-group"><h2>${t('firebaseTitle')}</h2><p class="form-hint">${t('firebaseHelp')}</p>
 ${auth}${backgroundReady?`<p class="form-hint">${t('firebasePushHelp')}</p>`:''}
 ${firebaseBusy||firebaseNotice?`<p id="firebaseStatus" class="form-hint" role="status" aria-live="polite">${firebaseBusy?t('working'):esc(firebaseNotice)}</p>`:''}
 ${appWorkerNotice?`<p id="appWorkerStatus" class="form-hint" role="status" aria-live="polite">${t('appWorkerUnavailable')} ${esc(appWorkerNotice)}</p>`:''}</section>`}
const views={
dash(){const a=active(),storeItems=storeBatches(),pending=storeItems.reduce((n,b)=>n+['r1','r2'].filter(k=>b.acks&&b.acks[k]&&!b.acks[k].response).length,0);
 const due50=a.filter(b=>calc(b).st>=2).length,due25=a.filter(b=>calc(b).st>=3).length;
 const recent=S.log.filter(l=>l.storeId==S.activeStoreId&&l.kind=='response').slice(0,5);
 return `<div class="card dash-actions"><h2>${t('dash')}</h2><p>${t('dashboardPrompt')}</p><div class="acts"><button onclick="go('add')">${t('add')}</button></div></div>
 <div class="stats"><div class="stat"><b>${storeItems.length}</b>${t('countProducts')}</div><div class="stat"><b>${due50}</b>${t('approaching50')}</div><div class="stat"><b>${due25}</b>${t('approaching25')}</div></div>
 <section class="risk-section y"><div class="risk-head"><h2>${t('await')}</h2><b>${pending}</b></div>${storeItems.map(b=>{const has=b.acks&&['r1','r2'].some(k=>b.acks[k]&&!b.acks[k].response);return has?card(b,DONE.includes(b.status)):''}).join('')||`<p class="mut">${t('noPending')}</p>`}</section>
 <section class="risk-section n"><h2>${t('latestReminders')}</h2>${a.filter(b=>calc(b).st>=1).map(b=>card(b,false,true)).join('')||`<p class="mut">${t('none')}</p>`}</section>
 <section class="risk-section g"><h2>${t('recentAck')}</h2>${recent.map(l=>`<div class="card"><b>${esc(l.name)}</b> · ${t(l.k=='r1'?'stage50':'stage25')}<br>${t(l.response=='there'?'there':l.response=='few'?'few':'allSold')} · ${t('q')}: ${l.qtyAtResponse}${l.updatedQuantity!=null?' · '+t('verq')+': '+l.updatedQuantity:''}<br><span class="mut">${esc(l.at)}</span></div>`).join('')||`<p class="mut">${t('none')}</p>`}</section>
 </div>`},
stock(){const k=q.toLowerCase();const a=active().filter(b=>(!initialBatchId||String(b.id)==initialBatchId)&&(b.name+' '+(b.brand||'')+' '+(b.no||'')).toLowerCase().includes(k)).sort((x,y)=>x.exp<y.exp?-1:1);
 return `<div class="in"><input id="q" placeholder="${t('search')}" value="${esc(q)}" oninput="q=this.value;if(!q){initialBatchId=null;history.replaceState(null,'',location.pathname)}render(1)" aria-label="${t('search')}"></div><br>
 ${a.map(b=>card(b)).join('')||`<p class="mut">${t('empty')}</p>`}`},
add(){const b=S.batches.find(x=>x.id==editId&&x.storeId==S.activeStoreId)||{qty:1,cat:'',...(pendingProduct||{})};const v=k=>esc(b[k]??'');
 const i=(k,l,ty='text',x='')=>`<label for="f_${k}">${t(l)}${['name','mfg','exp','qty'].includes(k)?' *':''}</label><input id="f_${k}" type="${ty}" value="${v(k)}" ${['name','mfg','exp','qty'].includes(k)?'required':''} ${x}>`;
 const cats=['Dairy','Vegetables','Fruits','Meat','Snacks','Beverages','Other',...(b.cat&&!['Dairy','Vegetables','Fruits','Meat','Snacks','Beverages','Other'].includes(b.cat)?[b.cat]:[])];
 const catKey={Dairy:'catDairy',Vegetables:'catVeg',Fruits:'catFruit',Meat:'catMeat',Snacks:'catSnacks',Beverages:'catDrinks',Other:'catOther'}; const choices=editId==null?recentProducts():[],quick=choices.length?`<section class="form-card"><h3>${t('recentTitle')}</h3><p class="form-hint">${t('recentHelp')}</p><div class="recent-products">${choices.map((p,n)=>`<button type="button" class="recent-product ${pendingProduct&&pendingProduct.name==p.name&&pendingProduct.brand==p.brand?'selected':''}" aria-pressed="${!!(pendingProduct&&pendingProduct.name==p.name&&pendingProduct.brand==p.brand)}" onclick="chooseRecentProduct(${n})"><b>${esc(p.name)}</b><small>${esc([p.brand,p.cat].filter(Boolean).join(' · '))}</small></button>`).join('')}</div></section>`:'';
 return `<h2>${t('add')}</h2><p class="form-hint">${t('formIntro')}</p>${err?`<p class="err" role="alert">${err}</p>`:''}
 ${quick}<section class="form-card"><h3>${t('productCard')}</h3><p class="form-hint">${t('productHint')}</p>
 ${i('name','name','text','list="pl"')}<datalist id="pl">${[...new Set(storeBatches().map(x=>x.name))].map(n=>`<option value="${esc(n)}">`).join('')}</datalist>
 <div class="form-grid">${i('brand','brand')}<div><label for="f_cat">${t('category')}</label><select id="f_cat"><option value="" ${!b.cat?'selected':''}>${t('selectCat')}</option>${cats.map(c=>`<option value="${esc(c)}" ${b.cat==c?'selected':''}>${catKey[c]?t(catKey[c]):esc(c)}</option>`).join('')}</select></div></div></section>
 <section class="form-card"><h3>${t('stockCard')}</h3><p class="form-hint">${t('stockHint')}</p>
 <div class="form-grid"><div>${i('qty','quantity','number','min="1" step="1" inputmode="numeric"')}</div><div>${i('mfg','mfg','date')}<small class="mut">${t('mfgHint')}</small></div></div>
 ${i('exp','exp','date')}<small class="mut">${t('expiryHelp')}</small>
 ${i('no','bno','text','autocomplete="off"')}<small class="mut">${t('batchOptional')}</small></section>
 <div class="acts"><button onclick="saveB()">${t('save')}</button><button class="s" onclick="editId=null;pendingProduct=null;err='';go('stock')">${t('cancel')}</button></div>`},
hist(){const h=storeBatches().filter(b=>DONE.includes(b.status));
 return `<h2>${t('hist')}</h2>${h.map(b=>card(b,1)).join('')||`<p class="mut">${t('none')}</p>`}
 <h2>${t('rlog')}</h2>${S.log.filter(l=>l.storeId==S.activeStoreId).map(l=>{const b=S.batches.find(x=>x.id==l.id&&x.storeId==l.storeId),ack=b&&b.acks&&b.acks[l.k];return `<div class="card"><b>${esc(l.name)}</b><br>${l.kind=='response'?`${t(l.k=='r1'?'stage50':'stage25')} · ${t(l.response=='there'?'there':l.response=='few'?'few':'allSold')} · ${t('q')}: ${l.qtyAtResponse}${l.updatedQuantity!=null?' · '+t('verq')+': '+l.updatedQuantity:''}`:`${t(l.k=='r1'?'stage50':'stage25')} · ${ack&&ack.response?t('responded')+': '+t(ack.response=='there'?'there':ack.response=='few'?'few':'allSold'):t('pending')}`}<br><span class="mut">${esc(l.at)}</span></div>`}).join('')||`<p class="mut">${t('none')}</p>`}`},
set(){return `<div class="settings-card brand-panel"><div class="brand-mark">KS</div><div><h3>KiranaSmart</h3><p>${t('tagline')}</p></div></div>
 <div class="settings-card settings-row"><div class="settings-icon">?</div><div class="settings-copy"><b>${t('guideSetting')}</b></div><button class="sm s" onclick="openGuide()">${t('guideBtn')}</button></div>
 <section class="settings-group"><h2>${t('appearance')}</h2><div class="settings-card"><div class="settings-row"><div class="settings-copy"><b>${t('appearance')}</b><p>${t('themeHelp')}</p></div></div>
 <div class="theme-options">${['system','light','dark'].map(x=>`<button class="theme-option ${S.theme==x?'selected':''}" aria-pressed="${S.theme==x}" onclick="setTheme('${x}')">${t(x)}</button>`).join('')}</div></div></section>
 <section class="settings-group"><h2>${t('general')}</h2><div class="settings-card"><div class="settings-row"><div class="settings-icon">N</div><div class="settings-copy"><b>${t('notif')}</b></div><button class="sm" onclick="notif()">${t('notif')}</button></div></div>
 <label class="settings-card settings-row sound-toggle" for="soundToggle"><div class="settings-icon">♪</div><div class="settings-copy"><b>${t('sound')}</b><p>${t('soundHelp')}</p></div><input id="soundToggle" type="checkbox" ${S.sound?'checked':''} onchange="S.sound=this.checked;save()"></label>
 <div class="settings-card"><div class="settings-row"><div class="settings-icon">G</div><div class="settings-copy"><b>${t('guest')}</b><p>${t('guestHelp')}</p></div></div></div>
 <div class="settings-card"><div class="settings-row"><div class="settings-icon">i</div><div class="settings-copy"><b>${t('privacy')}</b><p>${t('privacyHelp')}</p></div></div></div></section>
 ${firebaseAccountPanel()}
 ${accountPanel()}
 <section class="settings-group"><h2>${t('data')}</h2><div class="settings-card"><div class="settings-row"><div class="settings-icon">↓</div><div class="settings-copy"><b>${t('csv')}</b><p>${t('exportHelp')}</p></div><button class="sm" onclick="exportCSV()">${t('csv')}</button></div></div>
 <details class="settings-card"><summary>${t('backup')}</summary><div><p class="form-hint">${t('backupHelp')}</p><textarea id="bk" rows="6">${esc(JSON.stringify(S,null,2))}</textarea><p class="form-hint">${t('restoreHint')}</p><div class="acts"><button class="sm" onclick="copyBackup()">${t('copyBackup')}</button><button class="s sm" onclick="restore()">${t('restore')}</button></div></div></details></section>`}};
const tabs=['dash','stock','add','hist','set'];
function isServiceRoleKey(key){if(/^sb_secret_/i.test(key))return true;const parts=key.split('.');if(parts.length!=3)return false;
 try{let payload=parts[1].replace(/-/g,'+').replace(/_/g,'/');payload+='='.repeat((4-payload.length%4)%4);return JSON.parse(atob(payload)).role=='service_role'}catch(e){return false}}
function supabaseConfig(){const url=(localStorage.getItem('freshalert_supabase_url')||'').replace(/\/+$/,''),key=localStorage.getItem('freshalert_supabase_key')||'';
 if(!url||!key)throw new Error(t('configMissing'));
 if(isServiceRoleKey(key))throw new Error(t('unsafeKey'));
 let parsed;try{parsed=new URL(url)}catch(e){throw new Error(t('configInvalid'))}
 if(parsed.protocol!='https:'&&!(parsed.protocol=='http:'&&['localhost','127.0.0.1'].includes(parsed.hostname)))throw new Error(t('configInvalid'));
 const identity=url+'|'+key;if(supabaseIdentity&&supabaseIdentity!==identity){authSession=null;authUser=null;localStorage.removeItem('freshalert_supabase_session')}supabaseIdentity=identity;
 return{url,key}}
async function supabaseRequest(path,{method='GET',body,token,prefer}={}){
 const {url,key}=supabaseConfig(),headers={apikey:key,Authorization:'Bearer '+(token||key)};
 if(body!==undefined)headers['Content-Type']='application/json';
 if(prefer)headers.Prefer=prefer;
 const response=await fetch(url+path,{method,headers,body:body===undefined?undefined:JSON.stringify(body)});
 const text=await response.text();let data=null;
 if(text){try{data=JSON.parse(text)}catch(e){data=text}}
 if(!response.ok){const detail=data&&(data.msg||data.message||data.error_description||data.error)||response.statusText;throw new Error(String(detail||t('authError')))}
 return data}
function persistSession(session){
 if(!session||!session.access_token){authSession=null;authUser=null;localStorage.removeItem('freshalert_supabase_session');return}
 const rawExpiry=Number(session.expires_at),expiresAt=rawExpiry?(rawExpiry<1e12?rawExpiry*1000:rawExpiry):Date.now()+Number(session.expires_in||3600)*1000;
 authSession={...session,expires_at:expiresAt,project:supabaseIdentity};
 authUser=authSession.user||authUser;
 localStorage.setItem('freshalert_supabase_session',JSON.stringify(authSession))}
async function ensureSupabase(){
 const {url,key}=supabaseConfig(),identity=url+'|'+key;
 if(supabaseIdentity!==identity){supabaseIdentity=identity;authSession=null;authUser=null}
 if(!authSession){try{authSession=JSON.parse(localStorage.getItem('freshalert_supabase_session')||'null')}catch(e){authSession=null}}
 if(authSession&&authSession.project!==identity){authSession=null;authUser=null;localStorage.removeItem('freshalert_supabase_session')}
 if(authSession&&authSession.access_token&&Number(authSession.expires_at)>Date.now()+30000){authUser=authSession.user||null;return authSession}
 if(authSession&&authSession.refresh_token){
  const refreshed=await supabaseRequest('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:authSession.refresh_token},token:key});
  persistSession(refreshed);return authSession}
 authSession=null;authUser=null;return null}
async function saveSupabaseConfig(){const url=$('#sb_url').value.trim().replace(/\/+$/,''),key=$('#sb_key').value.trim();
 if(!url||!key){authNotice=t('configMissing');render();return}
 if(isServiceRoleKey(key)){authNotice=t('unsafeKey');render();return}
 try{localStorage.setItem('freshalert_supabase_url',url);localStorage.setItem('freshalert_supabase_key',key)}catch(e){authNotice=String(e&&e.message||t('authError'));render();return}
 authBusy=true;authNotice='';render();try{await ensureSupabase();authNotice=t('configReady')}catch(e){authNotice=String(e&&e.message||t('authError'))}finally{authBusy=false;render()}}
async function accountAction(action){const email=$('#auth_email').value.trim(),password=$('#auth_password').value;
 if(!email||!password){authNotice=t('authRequired');render();return}
 authBusy=true;authNotice='';render();try{const {key}=supabaseConfig();
  const result=action=='signup'?await supabaseRequest('/auth/v1/signup',{method:'POST',body:{email,password},token:key}):
   await supabaseRequest('/auth/v1/token?grant_type=password',{method:'POST',body:{email,password},token:key});
  if(result&&result.access_token){persistSession(result);authNotice=t('configReady')}
  else{authUser=result&&result.user||null;authNotice=action=='signup'?t('authConfirm'):t('authError')}}
 catch(e){authNotice=String(e&&e.message||t('authError'))}finally{authBusy=false;render()}}
async function signOut(){authBusy=true;authNotice='';render();try{await ensureSupabase();if(authSession)await supabaseRequest('/auth/v1/logout',{method:'POST',token:authSession.access_token});
  persistSession(null);authNotice=t('signedOut')}
 catch(e){authNotice=String(e&&e.message||t('authError'))}finally{authBusy=false;render()}}
function askCloud(action){if(!authUser){authNotice=t('authRequired');render();return}
 const copy=action=='upload'?t('uploadConfirm'):t('restoreConfirm'),label=action=='upload'?t('uploadCloud'):t('restoreCloud');
 mod(`<p>${esc(copy)}</p><div class="acts"><button onclick="runCloud('${action}')">${label}</button><button class="s" onclick="mod()">${t('cancel')}</button></div>`)}
function normalizeCloudSnapshot(data){const validDate=x=>Number.isFinite(dateValue(x));
 if(!data||!Array.isArray(data.batches)||!Array.isArray(data.log))throw new Error(t('cloudInvalid'));
 const stores=Array.isArray(data.stores)?data.stores.filter(s=>s&&typeof s.id=='string'&&/^[\w-]{1,80}$/.test(s.id)&&typeof s.name=='string'&&s.name.trim()).map(s=>({...s,name:s.name.trim(),timeZone:validTimeZone(s.timeZone)||deviceTimeZone()})):[];
 if(!stores.length)stores.push(...S.stores.map(s=>({...s})));
 const storeIds=new Set(stores.map(s=>s.id)),activeStoreId=storeIds.has(data.activeStoreId)?data.activeStoreId:stores[0].id;
 const ids=new Set(),statuses=['active','sold','removed','ret','disp','nf'];
 const batches=data.batches.map(b=>{if(!b||typeof b!='object'||!Number.isSafeInteger(Number(b.id))||typeof b.name!='string'||!b.name.trim()||!validDate(b.exp)||!Number.isInteger(Number(b.qty))||Number(b.qty)<1||!statuses.includes(b.status||'active')||(b.mfg&&!validDate(b.mfg)))throw new Error(t('cloudInvalid'));
  const id=Number(b.id),storeId=storeIds.has(b.storeId)?b.storeId:activeStoreId,key=storeId+'/'+id;if(ids.has(key))throw new Error(t('cloudInvalid'));ids.add(key);
  return {...b,id,storeId,name:b.name,brand:typeof b.brand=='string'?b.brand:'',no:typeof b.no=='string'?b.no:'',mfg:typeof b.mfg=='string'?b.mfg:'',exp:b.exp,
   qty:Number(b.qty),status:b.status||'active',rem:Array.isArray(b.rem)?b.rem.filter(x=>x=='r1'||x=='r2'):[],hist:Array.isArray(b.hist)?b.hist.map(String):[]}});
 const log=data.log.map(l=>{if(!l||typeof l!='object'||!['r1','r2'].includes(l.k))throw new Error(t('cloudInvalid'));
  return {...l,storeId:storeIds.has(l.storeId)?l.storeId:activeStoreId,name:String(l.name||''),no:String(l.no||''),at:String(l.at||'')}});
 return{batches,log,stores,activeStoreId}}
async function runCloud(action){mod();authBusy=true;authNotice='';render();try{await ensureSupabase();if(!authUser||!authSession)throw new Error(t('authRequired'));
  const token=authSession.access_token;
  if(action=='upload'){await supabaseRequest('/rest/v1/inventory_snapshots?on_conflict=user_id',{method:'POST',token,prefer:'resolution=merge-duplicates,return=minimal',
    body:{user_id:authUser.id,data:{batches:S.batches,log:S.log,stores:S.stores,activeStoreId:S.activeStoreId},updated_at:new Date().toISOString()}});authNotice=t('cloudSaved')}
  else{const rows=await supabaseRequest('/rest/v1/inventory_snapshots?select=data&user_id=eq.'+encodeURIComponent(authUser.id)+'&limit=1',{token});
   if(!Array.isArray(rows)||!rows.length){authNotice=t('cloudNoData')}else{const snapshot=normalizeCloudSnapshot(rows[0].data);S.stores=snapshot.stores;S.activeStoreId=snapshot.activeStoreId;S.batches=snapshot.batches;S.log=snapshot.log;ensureStores();save();authNotice=t('cloudRestored')}}}
 catch(e){authNotice=String(e&&e.message||t('authError'))}finally{authBusy=false;render()}}
function firebaseWebConfig(){return window.KS_FIREBASE_CONFIG||{}}
function firebaseConfigReady(){const c=firebaseWebConfig();return ['apiKey','authDomain','projectId','messagingSenderId','appId'].every(k=>typeof c[k]=='string'&&c[k].trim()&&!c[k].includes('REPLACE_'))}
function firebaseBackgroundAlertsReady(){return window.KS_FIREBASE_BACKGROUND_ALERTS_ENABLED===true}
function registerAppWorker(){if(!window.isSecureContext||!navigator.serviceWorker)return;
 navigator.serviceWorker.register('sw.js').catch(e=>{appWorkerNotice=String(e&&e.message||t('appWorkerUnavailable'));if(tab=='set')render()})}
function ensureFirebaseSdk(){if(window.firebase&&window.firebase.auth)return Promise.resolve(window.firebase);if(firebaseSdkPromise)return firebaseSdkPromise;
 const files=['firebase-app-compat.js','firebase-auth-compat.js','firebase-firestore-compat.js','firebase-messaging-compat.js'];
 firebaseSdkPromise=files.reduce((chain,file)=>chain.then(()=>new Promise((resolve,reject)=>{const script=document.createElement('script');
  script.src='https://www.gstatic.com/firebasejs/10.14.1/'+file;script.onload=resolve;script.onerror=()=>reject(new Error('Firebase SDK could not be loaded. Check the network connection.'));
  document.head.appendChild(script)})),Promise.resolve()).then(()=>window.firebase).catch(e=>{firebaseSdkPromise=null;throw e});
 return firebaseSdkPromise}
function initFirebase(){if(!firebaseConfigReady())throw new Error(t('firebaseSetupMissing'));
 return ensureFirebaseSdk().then(fb=>{firebaseApp=fb.apps.find(a=>a.name=='kiranasmart')||fb.initializeApp(firebaseWebConfig(),'kiranasmart');
  firebaseAuth=firebaseApp.auth();firebaseDb=firebaseApp.firestore();if(!firebaseAuthListenerSet){firebaseAuthListenerSet=true;firebaseAuth.onAuthStateChanged(user=>{
   const previousUid=firebaseUser&&firebaseUser.uid,nextUid=user&&user.uid;
   if(previousUid)persistLocalState();
   if(previousUid!==nextUid){S=nextUid?readLocalInventory('ks_user_'+nextUid,emptyInventoryState()):readLocalInventory('ks',emptyInventoryState());migrateAcknowledgements();ensureStores()}
   firebaseUser=user;firebaseSyncReady=false;firebaseSyncedBatches.clear();firebaseSyncedStores.clear();firebaseSyncedLog='';
   firebasePushEnabled=!!(user&&localStorage.getItem('ks_fcm_'+firebaseDeviceId())==user.uid);
   if(user)refreshFirebaseInventory().catch(e=>{firebaseNotice=String(e&&e.message||t('firebaseOffline'));if(tab=='set')render()});
   else{firebaseSyncReady=false;if(tab=='set')render()}})}return fb})}
function firebaseDeviceId(){let id=localStorage.getItem('ks_fcm_device');if(!id){id=crypto.randomUUID?crypto.randomUUID():'d'+Date.now().toString(36)+Math.random().toString(36).slice(2);localStorage.setItem('ks_fcm_device',id)}return id}
function batchCloudValue(b){const copy={...b};delete copy._updatedAt;return JSON.stringify(copy)}
function storeCloudValue(store){return JSON.stringify({id:store.id,name:store.name,timeZone:store.timeZone})}
function scheduleFirebaseSync(){if(!firebaseUser||!firebaseDb||!firebaseSyncReady||firebaseSyncTimer)return;
 firebaseSyncTimer=setTimeout(()=>{firebaseSyncTimer=null;flushFirebaseInventory().catch(e=>{firebaseNotice=String(e&&e.message||t('firebaseOffline'));if(tab=='set')render()})},700)}
async function writeFirebaseChanges(){if(!firebaseUser||!firebaseDb||!firebaseSyncReady)return;
 const uid=firebaseUser.uid,userRef=firebaseDb.collection('users').doc(uid),storeWrites=[],writes=[];
 S.stores.forEach(store=>{const value=storeCloudValue(store);
  if(firebaseSyncedStores.get(store.id)!==value){store._updatedAt=Date.now();storeWrites.push({id:store.id,ref:userRef.collection('stores').doc(store.id),data:{id:store.id,name:store.name,timeZone:store.timeZone,_updatedAt:store._updatedAt},value:storeCloudValue(store)})}});
 S.batches.forEach(b=>{if(!Number.isSafeInteger(Number(b.id)))return;if(!b.status)b.status='active';const id=String(b.id),storeId=b.storeId||S.stores[0].id,key=storeId+'/'+id,value=batchCloudValue(b);
  if(firebaseSyncedBatches.get(key)!==value){b.storeId=storeId;b._updatedAt=Date.now();writes.push({key,ref:userRef.collection('stores').doc(storeId).collection('batches').doc(id),data:JSON.parse(JSON.stringify(b)),value:batchCloudValue(b)})}});
 for(let start=0;start<storeWrites.length;start+=400){const chunk=storeWrites.slice(start,start+400),batch=firebaseDb.batch();
  chunk.forEach(item=>batch.set(item.ref,item.data));await batch.commit();chunk.forEach(item=>firebaseSyncedStores.set(item.id,item.value))}
 for(let start=0;start<writes.length;start+=400){const chunk=writes.slice(start,start+400),batch=firebaseDb.batch();
  chunk.forEach(item=>batch.set(item.ref,item.data));await batch.commit();chunk.forEach(item=>firebaseSyncedBatches.set(item.key,item.value))}
 const logValue=JSON.stringify(S.log),logChanged=firebaseSyncedLog!==logValue;if(logChanged){await firebaseDb.collection('users').doc(uid).collection('meta').doc('inventory').set({log:JSON.parse(logValue),updatedAt:Date.now()},{merge:true});firebaseSyncedLog=logValue}
 persistLocalState();
 if(storeWrites.length||writes.length||logChanged)firebaseNotice=t('firebaseSaved')}
async function flushFirebaseInventory(){if(firebaseSyncing||!firebaseUser||!firebaseDb||!firebaseSyncReady)return;
 firebaseSyncing=true;try{await writeFirebaseChanges()}finally{firebaseSyncing=false}}
async function refreshFirebaseInventory(){if(firebaseSyncing||!firebaseUser||!firebaseDb)return;
 firebaseSyncing=true;firebaseSyncReady=false;
 try{const userRef=firebaseDb.collection('users').doc(firebaseUser.uid),[storeSnapshot,legacyBatchSnapshot,metaSnapshot]=await Promise.all([
   userRef.collection('stores').get(),userRef.collection('batches').get(),userRef.collection('meta').doc('inventory').get()]);
  const remoteStores=new Map();storeSnapshot.forEach(doc=>{const store=doc.data();if(typeof store.name=='string'&&store.name.trim()){
   store.id=doc.id;store.timeZone=validTimeZone(store.timeZone)||deviceTimeZone();remoteStores.set(store.id,store);firebaseSyncedStores.set(store.id,storeCloudValue(store))}});
  const mergedStores=new Map(S.stores.map(store=>[store.id,store]));
  remoteStores.forEach((cloud,id)=>{const local=mergedStores.get(id);if(!local||Number(cloud._updatedAt||0)>=Number(local._updatedAt||0))mergedStores.set(id,cloud)});
  S.stores=[...mergedStores.values()];ensureStores();
  const batchSnapshots=await Promise.all(S.stores.map(store=>userRef.collection('stores').doc(store.id).collection('batches').get()));
  const remote=new Map(),legacyStoreId=S.stores[0].id;
  legacyBatchSnapshot.forEach(doc=>{const b=doc.data(),id=Number(b.id??doc.id),key=legacyStoreId+'/'+id;
   if(Number.isSafeInteger(id)&&typeof b.name=='string'&&b.name.trim()&&Number.isFinite(dateValue(b.exp))&&Number.isSafeInteger(Number(b.qty))&&Number(b.qty)>0){
    b.id=id;b.storeId=legacyStoreId;b.status=b.status||'active';remote.set(key,b)}});
  batchSnapshots.forEach((snapshot,index)=>snapshot.forEach(doc=>{const b=doc.data(),id=Number(b.id??doc.id),storeId=S.stores[index].id,key=storeId+'/'+id;
   if(Number.isSafeInteger(id)&&typeof b.name=='string'&&b.name.trim()&&Number.isFinite(dateValue(b.exp))&&Number.isSafeInteger(Number(b.qty))&&Number(b.qty)>0){
    b.id=id;b.storeId=storeId;b.status=b.status||'active';remote.set(key,b);firebaseSyncedBatches.set(key,batchCloudValue(b))}}));
  const merged=new Map(S.batches.map(b=>[(b.storeId||S.stores[0].id)+'/'+b.id,b]));
  remote.forEach((cloud,key)=>{const local=merged.get(key);if(!local||Number(cloud._updatedAt||0)>=Number(local._updatedAt||0))merged.set(key,cloud)});
  S.batches=[...merged.values()];
  if(initialStoreId&&S.stores.some(store=>store.id==initialStoreId))S.activeStoreId=initialStoreId;
  if(initialBatchId){const target=S.batches.find(b=>String(b.id)==initialBatchId&&(!initialStoreId||b.storeId==initialStoreId));if(target){S.activeStoreId=target.storeId;q=target.name;initialBatchId=null;initialStoreId=null;history.replaceState(null,'',location.pathname)}}
  const cloudLog=metaSnapshot.exists&&Array.isArray(metaSnapshot.data().log)?metaSnapshot.data().log:[],logs=new Map();
  cloudLog.forEach(x=>logs.set(JSON.stringify(x),x));S.log.forEach(x=>logs.set(JSON.stringify(x),x));S.log=[...logs.values()];ensureStores();
  firebaseSyncedLog=JSON.stringify(cloudLog);firebaseSyncReady=true;persistLocalState();
  await writeFirebaseChanges();firebaseNotice=t('firebaseSaved');render()
 }finally{firebaseSyncing=false}}async function syncFirebaseNow(){firebaseBusy=true;firebaseNotice='';render();try{await refreshFirebaseInventory()}catch(e){firebaseNotice=String(e&&e.message||t('firebaseOffline'))}finally{firebaseBusy=false;render()}}
async function firebaseAccountAction(action){const email=$('#fb_email').value.trim(),password=$('#fb_password').value;
 if(!email||!password){firebaseNotice=t('authRequired');render();return}
 firebaseBusy=true;firebaseNotice='';render();try{await initFirebase();if(action=='signup')await firebaseAuth.createUserWithEmailAndPassword(email,password);
  else await firebaseAuth.signInWithEmailAndPassword(email,password)}
 catch(e){firebaseNotice=String(e&&e.message||t('authError'))}finally{firebaseBusy=false;render()}}
async function firebasePasswordReset(){const email=$('#fb_email').value.trim();if(!email){firebaseNotice=t('authRequired');render();return}
 firebaseBusy=true;firebaseNotice='';render();try{await initFirebase();await firebaseAuth.sendPasswordResetEmail(email);firebaseNotice=t('firebaseResetSent')}
 catch(e){firebaseNotice=String(e&&e.message||t('authError'))}finally{firebaseBusy=false;render()}}
async function enableFirebasePush(){firebaseBusy=true;firebaseNotice='';render();try{
 if(!firebaseUser)throw new Error(t('authRequired'));if(!firebaseBackgroundAlertsReady())throw new Error(t('firebaseBackgroundUnavailable'));if(!window.isSecureContext||!navigator.serviceWorker)throw new Error(t('firebaseSecureContext'));
 const vapidKey=window.KS_FIREBASE_VAPID_KEY||'';if(!vapidKey||vapidKey.includes('REPLACE_'))throw new Error(t('firebaseSetupMissing'));
 if(!firebase.messaging.isSupported||!await firebase.messaging.isSupported())throw new Error(t('firebaseUnsupported'));
 const permission=await Notification.requestPermission();if(permission!='granted')throw new Error(t('nonot'));
 const registration=await navigator.serviceWorker.register('firebase-messaging-sw.js'),messaging=firebaseApp.messaging();
 const token=await messaging.getToken({vapidKey,serviceWorkerRegistration:registration});if(!token)throw new Error(t('firebaseUnsupported'));
 firebaseMessaging=messaging;const uid=firebaseUser.uid,deviceId=firebaseDeviceId(),timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone||'Asia/Kolkata';
 await firebaseDb.collection('users').doc(uid).collection('settings').doc('notifications').set({timeZone,lang:S.lang,appUrl:location.origin+location.pathname,updatedAt:Date.now()},{merge:true});
 await firebaseDb.collection('users').doc(uid).collection('tokens').doc(deviceId).set({token,enabled:true,updatedAt:Date.now()},{merge:true});
 localStorage.setItem('ks_fcm_'+deviceId,uid);firebasePushEnabled=true;
 if(!firebaseMessageListenerSet){messaging.onMessage(payload=>{const data=payload.data||{};if(navigator.vibrate)navigator.vibrate([200,100,200]);toast((data.title||'KiranaSmart')+(data.body?': '+data.body:''))});firebaseMessageListenerSet=true}
 firebaseNotice=t('firebasePushOn')
 }catch(e){firebaseNotice=String(e&&e.message||t('firebaseUnsupported'))}finally{firebaseBusy=false;render()}}
async function disableFirebasePush(){firebaseBusy=true;firebaseNotice='';render();try{
 if(!firebaseUser)throw new Error(t('authRequired'));const deviceId=firebaseDeviceId(),uid=firebaseUser.uid,vapidKey=window.KS_FIREBASE_VAPID_KEY||'';
 const messaging=firebaseApp.messaging(),registration=await navigator.serviceWorker.getRegistration();
 await firebaseDb.collection('users').doc(uid).collection('tokens').doc(deviceId).set({enabled:false,updatedAt:Date.now()},{merge:true});
 if(registration&&vapidKey){const token=await messaging.getToken({vapidKey,serviceWorkerRegistration:registration});if(token)await messaging.deleteToken(token)}
 localStorage.removeItem('ks_fcm_'+deviceId);firebasePushEnabled=false;firebaseNotice=t('firebasePushOff')
 }catch(e){firebaseNotice=String(e&&e.message||t('firebaseOffline'))}finally{firebaseBusy=false;render()}}
async function firebaseSignOut(){firebaseBusy=true;firebaseNotice='';render();try{
 if(firebasePushEnabled){await disableFirebasePush();if(firebasePushEnabled)throw new Error(firebaseNotice||t('firebaseOffline'))}
 if(firebaseAuth)await firebaseAuth.signOut();firebaseNotice=t('signedOut')
 }catch(e){firebaseNotice=String(e&&e.message||t('authError'))}finally{firebaseBusy=false;render()}}
function go(x){if(x=='add'&&tab!='add'&&editId==null)pendingProduct=null;tab=x;if(x!='add'){editId=null;err=''}render();
 if(x=='set'&&localStorage.getItem('freshalert_supabase_url')&&localStorage.getItem('freshalert_supabase_key'))ensureSupabase().then(()=>{if(tab=='set')render()}).catch(e=>{authNotice=String(e&&e.message||t('authError'));if(tab=='set')render()});
 scrollTo(0,0)}
function render(keep){ensureStores();reminders();save();$('#lg').value=S.lang;document.documentElement.lang=S.lang;$('#subtitle').textContent=t('tagline');$('#guideLabel').textContent=t('guideBtn');
 if(S.theme=='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.dataset.theme=S.theme;
 $('#nav').innerHTML=tabs.map(x=>`<button class="${tab==x?'on':''}" onclick="go('${x}')">${t(x)}</button>`).join('');
 $('#main').innerHTML=storeSwitcher()+views[tab]();
 const gauge=$('.score-value');if(gauge)requestAnimationFrame(()=>gauge.style.strokeDashoffset=gauge.dataset.offset);
 if(keep&&$('#q')){const e=$('#q');e.focus();e.setSelectionRange(e.value.length,e.value.length)}
 checkHealthMilestone()}
function saveB(){const g=k=>$('#f_'+k).value.trim();const o={name:g('name'),brand:g('brand'),no:g('no'),cat:g('cat')||'Other',mfg:g('mfg'),exp:g('exp'),qty:Number(g('qty'))};
 if(!o.name||!Number.isSafeInteger(o.qty)||o.qty<1||!Number.isFinite(dateValue(o.mfg))||!Number.isFinite(dateValue(o.exp)))return fail(o,t('errr'));
 if(dateValue(o.mfg)>=dateValue(o.exp))return fail(o,t('errd'));
 if(o.no&&storeBatches().some(b=>b.id!=editId&&String(b.name||'').trim().toLowerCase()==o.name.toLowerCase()&&String(b.no||'').trim().toLowerCase()==o.no.toLowerCase()))return fail(o,t('dupe'));
 if(editId){const b=activeBatch(editId);if(!b)return fail(o,t('errr'));const oldDates=b.exp+b.mfg,oldQty=Number(b.qty)||0,oldLeft=stockLeft(b);Object.assign(b,o);b.remaining=Math.min(o.qty,Math.max(0,oldLeft+o.qty-oldQty));b.ver=b.remaining;b.hist=b.hist||[];b.hist.push(new Date().toLocaleDateString()+': edit');
  if(oldDates!=b.exp+b.mfg){b.acks={};b.rem=[]}}
 else{let id=Date.now();while(S.batches.some(b=>b.id==id))id++;S.batches.push({id,storeId:S.activeStoreId,status:'active',rem:[],acks:{},hist:[],ver:null,remaining:o.qty,...o})}
 editId=null;err='';pendingProduct=null;tab='stock';render();toast(t('ok'))}
function fail(o,m){err=m;
 const vals={};['name','brand','no','cat','mfg','exp','qty'].forEach(k=>vals[k]=$('#f_'+k).value);
 render();Object.keys(vals).forEach(k=>$('#f_'+k).value=vals[k]);scrollTo(0,0)}
function removeTracking(id){const b=activeBatch(id);if(!b)return;mod(`<p>${t('removeConfirm')}</p><div class="acts"><button class="d" onclick="bRemove(${id})">${t('remove')}</button><button class="s" onclick="mod()">${t('cancel')}</button></div>`)}
function bRemove(id){const b=activeBatch(id);if(b){b.status='removed';b.hist=b.hist||[];b.hist.push(new Date().toLocaleString()+': '+t('removed'))}mod();render()}
function mod(h){const m=$('#modal');if(!h){m.style.display='none';m.setAttribute('aria-hidden','true');return}$('#mbox').innerHTML=h;m.style.display='flex';m.setAttribute('aria-hidden','false');
 const first=m.querySelector('button,input');if(first)first.focus()}
function openV(id,stage){const b=activeBatch(id),ack=b&&b.acks&&b.acks[stage];if(!ack||ack.response)return;
 mod(`<b>${t('verify')} · ${t(stage=='r1'?'stage50':'stage25')}</b><p>${esc(b.name)}${b.no?' · '+t('bno')+': '+esc(b.no):''} · ${t('onhand')}: ${stockLeft(b)}</p>
 <button onclick="respond(${id},'${stage}','there')">${t('there')}</button>
 <label for="vq">${t('responseQty')}</label><div class="in"><input id="vq" type="number" min="1" step="1" inputmode="numeric" aria-label="${t('responseQty')}"><button onclick="respond(${id},'${stage}','few')">${t('few')}</button></div>
 <button class="d" onclick="respond(${id},'${stage}','sold')">${t('allSold')}</button><button class="s" onclick="mod()">${t('cancel')}</button>`)}
function respond(id,stage,response){const b=activeBatch(id),ack=b&&b.acks&&b.acks[stage];if(!ack||ack.response)return;
 const before=stockLeft(b);let updatedQuantity=null;
 if(response=='few'){const field=$('#vq'),n=field?Number(field.value):NaN,limit=b.status=='sold'?Number(b.qty):before;if(!Number.isSafeInteger(n)||n<1||n>limit){toast(t('responseQtyError'));return}updatedQuantity=n;b.remaining=n;b.ver=n}
 if(response=='sold'){b.remaining=0;b.ver=0;b.status='sold'}
 const at=new Date().toLocaleString();ack.response=response;ack.respondedAt=at;ack.qtyAtResponse=before;ack.updatedQuantity=updatedQuantity;
 S.log.unshift({id:b.id,storeId:b.storeId,name:b.name,no:b.no,k:stage,at,kind:'response',response,qtyAtResponse:before,updatedQuantity});
 b.hist=b.hist||[];b.hist.push(at+': '+t(response=='there'?'there':response=='few'?'few':'allSold')+(updatedQuantity!=null?' ('+updatedQuantity+')':''));
 mod();render();toast(t('ok'))}
function exportCSV(){try{const store=currentStore(),rows=[['Store','Product','Brand','Batch number','Category','Quantity at registration','Current quantity','Manufacturing date','Expiry date','Tracking status']];
 const cell=v=>{let s=String(v??'');if(/^\s*['"=+\-@]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';};
 storeBatches().forEach(b=>rows.push([store.name,b.name,b.brand,b.no||'',b.cat,b.qty,stockLeft(b),b.mfg,b.exp,b.status||'active']));
 const blob=new Blob(['\uFEFF'+rows.map(r=>r.map(cell).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download='kiranasmart-products.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}catch(e){toast(t('badcsv'))}}
async function notif(){try{if(!window.Notification)throw new Error('unsupported');const p=await Notification.requestPermission();if(p!='granted')toast(t('nonot'));else toast(t('ok'))}catch(e){toast(t('nonot'))}}
function restore(){try{const backup=JSON.parse($('#bk').value);if(!backup||typeof backup!='object'||!Array.isArray(backup.batches)||!Array.isArray(backup.log))throw new Error(t('bad'));
 const snapshot=normalizeCloudSnapshot(backup),next={...backup,batches:snapshot.batches,log:snapshot.log,stores:snapshot.stores,activeStoreId:snapshot.activeStoreId};
 next.lang=['en','hi','kn'].includes(next.lang)?next.lang:'en';if(!['system','light','dark'].includes(next.theme))next.theme='system';
 S=next;migrateAcknowledgements();ensureStores();const saved=save();render();if(saved)toast(t('ok'))}catch(e){toast(t('bad'))}}
$('#modal').addEventListener('click',e=>{if(e.target.id=='modal')mod()});
document.addEventListener('keydown',e=>{if(e.key=='Escape'){if(guideOpen)skipGuide();else if($('#modal').style.display=='flex')mod()}});
document.addEventListener('keydown',e=>{if(e.key!='Tab')return;const container=guideOpen?$('#onboarding .guide-card'):$('#modal').style.display=='flex'?$('#mbox'):null;if(!container)return;
 const focusable=[...container.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex="0"]')];if(!focusable.length)return;
 const first=focusable[0],last=focusable[focusable.length-1];
 if(e.shiftKey&&(document.activeElement===first||document.activeElement===container)){e.preventDefault();last.focus()}
 else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}});
document.addEventListener('click',e=>{const button=e.target.closest&&e.target.closest('button');if(button&&S.sound)playAudioCue('click')});
resizeConfetti();render();registerAppWorker();if(guideOpen){setGuideBackground(true);renderGuide()}
if(firebaseConfigReady())initFirebase().catch(e=>{firebaseNotice=String(e&&e.message||t('firebaseSetupMissing'));if(tab=='set')render()});
setInterval(()=>{reminders();save();if(document.visibilityState==='visible')render()},60000);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){render();if(firebaseUser)refreshFirebaseInventory().catch(e=>{firebaseNotice=String(e&&e.message||t('firebaseOffline'));if(tab=='set')render()})}});

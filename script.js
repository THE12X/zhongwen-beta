const RAW_VOCAB = {
  "HSK1": [
    {"chinese": "你好", "pinyin": "nǐ hǎo", "english": "Hello"},
    {"chinese": "您好", "pinyin": "nín hǎo", "english": "Hello (polite)"},
    {"chinese": "你们好", "pinyin": "nǐmen hǎo", "english": "Hello (plural)"},
    {"chinese": "对不起", "pinyin": "duìbuqǐ", "english": "I'm sorry"},
    {"chinese": "没关系", "pinyin": "méi guānxi", "english": "That's okay / No problem"},
    {"chinese": "谢谢", "pinyin": "xièxie", "english": "Thank you"},
    {"chinese": "不谢", "pinyin": "bú xiè", "english": "You're welcome"},
    {"chinese": "谢谢你", "pinyin": "xièxie nǐ", "english": "Thank you"},
    {"chinese": "不客气", "pinyin": "bú kèqi", "english": "You're welcome"},
    {"chinese": "再见", "pinyin": "zàijiàn", "english": "Goodbye"},
    {"chinese": "叫", "pinyin": "jiào", "english": "to call, to be called"},
    {"chinese": "什么", "pinyin": "shénme", "english": "what"},
    {"chinese": "名字", "pinyin": "míngzi", "english": "name"},
    {"chinese": "我", "pinyin": "wǒ", "english": "I, me"},
    {"chinese": "李月", "pinyin": "Lǐ Yuè", "english": "Li Yue, name of a person"},
    {"chinese": "是", "pinyin": "shì", "english": "to be"},
    {"chinese": "老师", "pinyin": "lǎoshī", "english": "teacher"},
    {"chinese": "吗", "pinyin": "ma", "english": "used at the end of a question"},
    {"chinese": "学生", "pinyin": "xuésheng", "english": "student"},
    {"chinese": "人", "pinyin": "rén", "english": "human, person"},
    {"chinese": "中国", "pinyin": "Zhōngguó", "english": "China"},
    {"chinese": "美国", "pinyin": "Měiguó", "english": "the United States of America"},
    {"chinese": "她", "pinyin": "tā", "english": "she, her"},
    {"chinese": "谁", "pinyin": "shéi", "english": "who, whom"},
    {"chinese": "的", "pinyin": "de", "english": "used after an attribute"},
    {"chinese": "汉语", "pinyin": "Hànyǔ", "english": "Chinese (language)"},
    {"chinese": "哪", "pinyin": "nǎ", "english": "which"},
    {"chinese": "国", "pinyin": "guó", "english": "country, nation"},
    {"chinese": "呢", "pinyin": "ne", "english": "used at the end of a question"},
    {"chinese": "他", "pinyin": "tā", "english": "he, him"},
    {"chinese": "同学", "pinyin": "tóngxué", "english": "classmate"},
    {"chinese": "朋友", "pinyin": "péngyou", "english": "friend"},
    {"chinese": "家", "pinyin": "jiā", "english": "family"},
    {"chinese": "有", "pinyin": "yǒu", "english": "to have, there be"},
    {"chinese": "口", "pinyin": "kǒu", "english": "a measure word for members of families, etc."},
    {"chinese": "女儿", "pinyin": "nǚ'ér", "english": "daughter"},
    {"chinese": "几", "pinyin": "jǐ", "english": "how many"},
    {"chinese": "岁", "pinyin": "suì", "english": "year (of age)"},
    {"chinese": "了", "pinyin": "le", "english": "used at the end of or in the middle of a sentence to indicate a change or a new circumstance"},
    {"chinese": "今年", "pinyin": "jīnnián", "english": "this year"},
    {"chinese": "多", "pinyin": "duō", "english": "indicating degree or extent"},
    {"chinese": "大", "pinyin": "dà", "english": "(of age) old"},
    {"chinese": "会", "pinyin": "huì", "english": "can, to be able to"},
    {"chinese": "说", "pinyin": "shuō", "english": "to speak, to say"},
    {"chinese": "妈妈", "pinyin": "māma", "english": "mother"},
    {"chinese": "菜", "pinyin": "cài", "english": "dish, cuisine"},
    {"chinese": "很", "pinyin": "hěn", "english": "very, quite"},
    {"chinese": "好吃", "pinyin": "hǎochī", "english": "delicious, tasty"},
    {"chinese": "做", "pinyin": "zuò", "english": "to make, to produce"},
    {"chinese": "写", "pinyin": "xiě", "english": "to write"},
    {"chinese": "汉字", "pinyin": "Hànzì", "english": "Chinese character"},
    {"chinese": "字", "pinyin": "zì", "english": "character, word"},
    {"chinese": "怎么", "pinyin": "zěnme", "english": "(indicating nature, condition or manner, etc.) how"},
    {"chinese": "读", "pinyin": "dú", "english": "to read"},
    {"chinese": "请", "pinyin": "qǐng", "english": "(polite) please"},
    {"chinese": "问", "pinyin": "wèn", "english": "to ask, to inquire"},
    {"chinese": "今天", "pinyin": "jīntiān", "english": "today"},
    {"chinese": "号", "pinyin": "hào", "english": "(for date of month) number"},
    {"chinese": "月", "pinyin": "yuè", "english": "month"},
    {"chinese": "星期", "pinyin": "xīngqī", "english": "week"},
    {"chinese": "昨天", "pinyin": "zuótiān", "english": "yesterday"},
    {"chinese": "明天", "pinyin": "míngtiān", "english": "tomorrow"},
    {"chinese": "去", "pinyin": "qù", "english": "to go"},
    {"chinese": "学校", "pinyin": "xuéxiào", "english": "school"},
    {"chinese": "看", "pinyin": "kàn", "english": "to look at, to watch, to read"},
    {"chinese": "书", "pinyin": "shū", "english": "book"},
    {"chinese": "想", "pinyin": "xiǎng", "english": "to want, would like"},
    {"chinese": "喝", "pinyin": "hē", "english": "to drink"},
    {"chinese": "茶", "pinyin": "chá", "english": "tea"},
    {"chinese": "吃", "pinyin": "chī", "english": "to eat"},
    {"chinese": "米饭", "pinyin": "mǐfàn", "english": "cooked rice"},
    {"chinese": "下午", "pinyin": "xiàwǔ", "english": "afternoon"},
    {"chinese": "商店", "pinyin": "shāngdiàn", "english": "shop, store"},
    {"chinese": "买", "pinyin": "mǎi", "english": "to buy, to purchase"},
    {"chinese": "个", "pinyin": "gè", "english": "a general measure word"},
    {"chinese": "杯子", "pinyin": "bēizi", "english": "cup, glass"},
    {"chinese": "这", "pinyin": "zhè", "english": "this"},
    {"chinese": "多少", "pinyin": "duōshao", "english": "how many, how much"},
    {"chinese": "钱", "pinyin": "qián", "english": "money"},
    {"chinese": "块", "pinyin": "kuài", "english": "a unit of money, same as \"yuan\""},
    {"chinese": "那", "pinyin": "nà", "english": "that"},
    {"chinese": "小", "pinyin": "xiǎo", "english": "small, little"},
    {"chinese": "猫", "pinyin": "māo", "english": "cat"},
    {"chinese": "在", "pinyin": "zài", "english": "to be in/on/at; in/on/at"},
    {"chinese": "那儿", "pinyin": "nàr", "english": "there"},
    {"chinese": "狗", "pinyin": "gǒu", "english": "dog"},
    {"chinese": "椅子", "pinyin": "yǐzi", "english": "chair"},
    {"chinese": "下面 (下)", "pinyin": "xiàmiàn (xià)", "english": "under, below"},
    {"chinese": "哪儿", "pinyin": "nǎr", "english": "where"},
    {"chinese": "工作", "pinyin": "gōngzuò", "english": "to work; job"},
    {"chinese": "儿子", "pinyin": "érzi", "english": "son"},
    {"chinese": "医院", "pinyin": "yīyuàn", "english": "hospital"},
    {"chinese": "医生", "pinyin": "yīshēng", "english": "doctor"},
    {"chinese": "爸爸", "pinyin": "bàba", "english": "father"},
    {"chinese": "桌子", "pinyin": "zhuōzi", "english": "desk, table"},
    {"chinese": "上", "pinyin": "shàng", "english": "up, above"},
    {"chinese": "电脑", "pinyin": "diànnǎo", "english": "computer"},
    {"chinese": "和", "pinyin": "hé", "english": "and"},
    {"chinese": "本", "pinyin": "běn", "english": "a measure word for books"},
    {"chinese": "里", "pinyin": "lǐ", "english": "inner, inside, interior"},
    {"chinese": "前面", "pinyin": "qiánmiàn", "english": "front"},
    {"chinese": "后面", "pinyin": "hòumiàn", "english": "back"},
    {"chinese": "王方", "pinyin": "Wáng Fāng", "english": "Wang Fang, name of a person"},
    {"chinese": "谢朋", "pinyin": "Xiè Péng", "english": "Xie Peng, name of a person"},
    {"chinese": "这儿", "pinyin": "zhèr", "english": "here"},
    {"chinese": "没有 (没)", "pinyin": "méiyǒu (méi)", "english": "there is not"},
    {"chinese": "能", "pinyin": "néng", "english": "can, may"},
    {"chinese": "坐", "pinyin": "zuò", "english": "to sit, to be seated"},
    {"chinese": "现在", "pinyin": "xiànzài", "english": "now"},
    {"chinese": "点", "pinyin": "diǎn", "english": "o'clock"},
    {"chinese": "分", "pinyin": "fēn", "english": "minute"},
    {"chinese": "中午", "pinyin": "zhōngwǔ", "english": "noon"},
    {"chinese": "吃饭", "pinyin": "chī fàn", "english": "to eat a meal"},
    {"chinese": "时候", "pinyin": "shíhou", "english": "time, moment"},
    {"chinese": "回", "pinyin": "huí", "english": "to come/go back, to return"},
    {"chinese": "我们", "pinyin": "wǒmen", "english": "we, us"},
    {"chinese": "电影", "pinyin": "diànyǐng", "english": "film, movie"},
    {"chinese": "住", "pinyin": "zhù", "english": "to live, to stay"},
    {"chinese": "前", "pinyin": "qián", "english": "before, earlier than"},
    {"chinese": "北京", "pinyin": "Běijīng", "english": "Beijing, capital of China"},
    {"chinese": "天气", "pinyin": "tiānqì", "english": "weather"},
    {"chinese": "怎么样", "pinyin": "zěnmeyàng", "english": "(indicating nature, condition or manner) how"},
    {"chinese": "太", "pinyin": "tài", "english": "too, excessively"},
    {"chinese": "太……了", "pinyin": "tài……le", "english": "too, extremely"},
    {"chinese": "热", "pinyin": "rè", "english": "hot"},
    {"chinese": "冷", "pinyin": "lěng", "english": "cold"},
    {"chinese": "下雨", "pinyin": "xià yǔ", "english": "to rain"},
    {"chinese": "下", "pinyin": "xià", "english": "(of rain, snow, etc.) to fall"},
    {"chinese": "雨", "pinyin": "yǔ", "english": "rain"},
    {"chinese": "小姐", "pinyin": "xiǎojiě", "english": "miss, young lady"},
    {"chinese": "来", "pinyin": "lái", "english": "to come"},
    {"chinese": "身体", "pinyin": "shēntǐ", "english": "body"},
    {"chinese": "爱", "pinyin": "ài", "english": "to like, to love"},
    {"chinese": "些", "pinyin": "xiē", "english": "some, a few"},
    {"chinese": "水果", "pinyin": "shuǐguǒ", "english": "fruit"},
    {"chinese": "水", "pinyin": "shuǐ", "english": "water"},
    {"chinese": "喂", "pinyin": "wèi", "english": "hello, hey"},
    {"chinese": "也", "pinyin": "yě", "english": "also, too"},
    {"chinese": "学习 (学)", "pinyin": "xuéxí (xué)", "english": "to study, to learn"},
    {"chinese": "大卫", "pinyin": "Dàwèi", "english": "David"},
    {"chinese": "上午", "pinyin": "shàngwǔ", "english": "morning, before noon"},
    {"chinese": "睡觉", "pinyin": "shuì jiào", "english": "to sleep"},
    {"chinese": "电视", "pinyin": "diànshì", "english": "television"},
    {"chinese": "喜欢", "pinyin": "xǐhuan", "english": "to like, to be fond of"},
    {"chinese": "给", "pinyin": "gěi", "english": "to"},
    {"chinese": "打电话", "pinyin": "dǎ diànhuà", "english": "to make a phone call"},
    {"chinese": "吧", "pinyin": "ba", "english": "a modal particle used at the end of a sentence to indicate consultation, a suggestion, request or command"},
    {"chinese": "东西", "pinyin": "dōngxi", "english": "thing, stuff"},
    {"chinese": "一点儿", "pinyin": "yìdiǎnr", "english": "a few, a little"},
    {"chinese": "苹果", "pinyin": "píngguǒ", "english": "apple"},
    {"chinese": "看见", "pinyin": "kànjiàn", "english": "to see"},
    {"chinese": "先生", "pinyin": "xiānsheng", "english": "Mr., sir"},
    {"chinese": "开", "pinyin": "kāi", "english": "to drive"},
    {"chinese": "车", "pinyin": "chē", "english": "car, vehicle"},
    {"chinese": "回来", "pinyin": "huílai", "english": "to come back"},
    {"chinese": "分钟", "pinyin": "fēnzhōng", "english": "minute"},
    {"chinese": "后", "pinyin": "hòu", "english": "after, afterwards, later"},
    {"chinese": "张", "pinyin": "Zhāng", "english": "Zhang, a Chinese family name"},
    {"chinese": "衣服", "pinyin": "yīfu", "english": "clothes"},
    {"chinese": "漂亮", "pinyin": "piàoliang", "english": "beautiful, pretty"},
    {"chinese": "啊", "pinyin": "a", "english": "a modal particle used at the end of a sentence as a sign of confirmation or defense"},
    {"chinese": "少", "pinyin": "shǎo", "english": "little, few"},
    {"chinese": "不少", "pinyin": "bùshǎo", "english": "quite a few, many"},
    {"chinese": "这些", "pinyin": "zhèxiē", "english": "these"},
    {"chinese": "都", "pinyin": "dōu", "english": "both, all"},
    {"chinese": "认识", "pinyin": "rènshi", "english": "to meet, to know"},
    {"chinese": "年", "pinyin": "nián", "english": "year"},
    {"chinese": "大学", "pinyin": "dàxué", "english": "college, university"},
    {"chinese": "饭店", "pinyin": "fàndiàn", "english": "hotel, restaurant"},
    {"chinese": "出租车", "pinyin": "chūzūchē", "english": "taxi, cab"},
    {"chinese": "一起", "pinyin": "yìqǐ", "english": "together"},
    {"chinese": "高兴", "pinyin": "gāoxìng", "english": "glad, happy"},
    {"chinese": "听", "pinyin": "tīng", "english": "to listen"},
    {"chinese": "飞机", "pinyin": "fēijī", "english": "airplane"}
  ],
  "HSK2": [
    {"chinese": "旅游", "pinyin": "lǚyóu", "english": "to travel, to take a trip"},
    {"chinese": "觉得", "pinyin": "juéde", "english": "to think, to feel"},
    {"chinese": "最", "pinyin": "zuì", "english": "most, to the greatest extent"},
    {"chinese": "为什么", "pinyin": "wèi shénme", "english": "why"},
    {"chinese": "也", "pinyin": "yě", "english": "also, too"},
    {"chinese": "运动", "pinyin": "yùndòng", "english": "sport; to take physical exercise, to work out"},
    {"chinese": "踢足球", "pinyin": "tī zúqiú", "english": "to play football"},
    {"chinese": "一起", "pinyin": "yìqǐ", "english": "together"},
    {"chinese": "要", "pinyin": "yào", "english": "to want to, would like to"},
    {"chinese": "新", "pinyin": "xīn", "english": "new"},
    {"chinese": "它", "pinyin": "tā", "english": "it"},
    {"chinese": "眼睛", "pinyin": "yǎnjing", "english": "eye"},
    {"chinese": "花花", "pinyin": "Huāhua", "english": "name of a cat"},
    {"chinese": "生病", "pinyin": "shēng bìng", "english": "to fall ill, to be sick"},
    {"chinese": "每", "pinyin": "měi", "english": "every, each"},
    {"chinese": "早上", "pinyin": "zǎoshang", "english": "morning"},
    {"chinese": "跑步", "pinyin": "pǎo bù", "english": "to run, to jog"},
    {"chinese": "起床", "pinyin": "qǐ chuáng", "english": "to get up, to get out of bed"},
    {"chinese": "药", "pinyin": "yào", "english": "medicine, drug"},
    {"chinese": "身体", "pinyin": "shēntǐ", "english": "body"},
    {"chinese": "出院", "pinyin": "chū yuàn", "english": "to leave hospital, to be discharged from hospital"},
    {"chinese": "出", "pinyin": "chū", "english": "to come/go out"},
    {"chinese": "高", "pinyin": "gāo", "english": "tall, high"},
    {"chinese": "米", "pinyin": "mǐ", "english": "meter"},
    {"chinese": "知道", "pinyin": "zhīdào", "english": "to know"},
    {"chinese": "休息", "pinyin": "xiūxi", "english": "to have or take a rest"},
    {"chinese": "忙", "pinyin": "máng", "english": "busy"},
    {"chinese": "时间", "pinyin": "shíjiān", "english": "time"},
    {"chinese": "手表", "pinyin": "shǒubiǎo", "english": "watch"},
    {"chinese": "千", "pinyin": "qiān", "english": "thousand"},
    {"chinese": "报纸", "pinyin": "bàozhǐ", "english": "newspaper"},
    {"chinese": "送", "pinyin": "sòng", "english": "to send, to deliver"},
    {"chinese": "一下", "pinyin": "yíxià", "english": "used after a verb, indicating an act or an attempt"},
    {"chinese": "牛奶", "pinyin": "niúnǎi", "english": "milk"},
    {"chinese": "房间", "pinyin": "fángjiān", "english": "room"},
    {"chinese": "丈夫", "pinyin": "zhàngfu", "english": "husband"},
    {"chinese": "旁边", "pinyin": "pángbiān", "english": "beside"},
    {"chinese": "真", "pinyin": "zhēn", "english": "really, indeed"},
    {"chinese": "粉色", "pinyin": "fěnsè", "english": "pink"},
    {"chinese": "粉", "pinyin": "fěn", "english": "pink"},
    {"chinese": "颜色", "pinyin": "yánsè", "english": "color"},
    {"chinese": "左边", "pinyin": "zuǒbian", "english": "left side"},
    {"chinese": "红色", "pinyin": "hóngsè", "english": "red"},
    {"chinese": "红", "pinyin": "hóng", "english": "red"},
    {"chinese": "生日", "pinyin": "shēngrì", "english": "birthday"},
    {"chinese": "快乐", "pinyin": "kuàilè", "english": "happy, glad"},
    {"chinese": "给", "pinyin": "gěi", "english": "(used after a verb) to, for"},
    {"chinese": "接", "pinyin": "jiē", "english": "to receive, to take, to accept"},
    {"chinese": "晚上", "pinyin": "wǎnshang", "english": "evening, night"},
    {"chinese": "问", "pinyin": "wèn", "english": "to ask"},
    {"chinese": "非常", "pinyin": "fēicháng", "english": "very, extremely"},
    {"chinese": "开始", "pinyin": "kāishǐ", "english": "to begin, to start"},
    {"chinese": "已经", "pinyin": "yǐjīng", "english": "already"},
    {"chinese": "长", "pinyin": "cháng", "english": "long"},
    {"chinese": "两", "pinyin": "liǎng", "english": "two"},
    {"chinese": "帮", "pinyin": "bāng", "english": "to help, to assist"},
    {"chinese": "介绍", "pinyin": "jièshào", "english": "to introduce, to recommend"},
    {"chinese": "外面", "pinyin": "wàimiàn", "english": "outside"},
    {"chinese": "准备", "pinyin": "zhǔnbèi", "english": "to intend, to plan"},
    {"chinese": "就", "pinyin": "jiù", "english": "used to indicate a conclusion or resolution"},
    {"chinese": "鱼", "pinyin": "yú", "english": "fish"},
    {"chinese": "吧", "pinyin": "ba", "english": "used at the end of a sentence to indicate consultation, suggestion, request or command"},
    {"chinese": "件", "pinyin": "jiàn", "english": "(used for clothes among other items) piece"},
    {"chinese": "还", "pinyin": "hái", "english": "passably, fairly, rather"},
    {"chinese": "可以", "pinyin": "kěyǐ", "english": "not bad"},
    {"chinese": "不错", "pinyin": "búcuò", "english": "pretty good"},
    {"chinese": "考试", "pinyin": "kǎoshì", "english": "test, exam"},
    {"chinese": "意思", "pinyin": "yìsi", "english": "meaning"},
    {"chinese": "咖啡", "pinyin": "kāfēi", "english": "coffee"},
    {"chinese": "对", "pinyin": "duì", "english": "(used before a noun or pronoun) to, for"},
    {"chinese": "以后", "pinyin": "yǐhòu", "english": "after, afterwards, later"},
    {"chinese": "门", "pinyin": "mén", "english": "door, gate"},
    {"chinese": "外", "pinyin": "wài", "english": "outer, outside"},
    {"chinese": "自行车", "pinyin": "zìxíngchē", "english": "bike"},
    {"chinese": "羊肉", "pinyin": "yángròu", "english": "mutton"},
    {"chinese": "好吃", "pinyin": "hǎochī", "english": "delicious, yummy"},
    {"chinese": "面条", "pinyin": "miàntiáo", "english": "noodles"},
    {"chinese": "打篮球", "pinyin": "dǎ lánqiú", "english": "to play basketball"},
    {"chinese": "因为", "pinyin": "yīnwèi", "english": "because, since"},
    {"chinese": "所以", "pinyin": "suǒyǐ", "english": "so, therefore"},
    {"chinese": "游泳", "pinyin": "yóu yǒng", "english": "to swim"},
    {"chinese": "经常", "pinyin": "jīngcháng", "english": "often, frequently"},
    {"chinese": "公斤", "pinyin": "gōngjīn", "english": "kilogram"},
    {"chinese": "姐姐", "pinyin": "jiějie", "english": "elder sister"},
    {"chinese": "教室", "pinyin": "jiàoshì", "english": "classroom"},
    {"chinese": "机场", "pinyin": "jīchǎng", "english": "airport"},
    {"chinese": "路", "pinyin": "lù", "english": "road, path, way"},
    {"chinese": "离", "pinyin": "lí", "english": "to be away from"},
    {"chinese": "公司", "pinyin": "gōngsī", "english": "company, firm"},
    {"chinese": "远", "pinyin": "yuǎn", "english": "far, distant"},
    {"chinese": "公共汽车", "pinyin": "gōnggòng qìchē", "english": "bus"},
    {"chinese": "小时", "pinyin": "xiǎoshí", "english": "hour"},
    {"chinese": "慢", "pinyin": "màn", "english": "slow"},
    {"chinese": "快", "pinyin": "kuài", "english": "quick, fast"},
    {"chinese": "过", "pinyin": "guò", "english": "to pass (time), to spend (time)"},
    {"chinese": "走", "pinyin": "zǒu", "english": "to walk"},
    {"chinese": "到", "pinyin": "dào", "english": "to arrive, to reach"},
    {"chinese": "再", "pinyin": "zài", "english": "again, once more"},
    {"chinese": "让", "pinyin": "ràng", "english": "to let, to allow"},
    {"chinese": "告诉", "pinyin": "gàosù", "english": "to tell"},
    {"chinese": "等", "pinyin": "děng", "english": "to wait, to await"},
    {"chinese": "找", "pinyin": "zhǎo", "english": "to look for"},
    {"chinese": "事情", "pinyin": "shìqing", "english": "thing, matter, affair"},
    {"chinese": "服务员", "pinyin": "fúwùyuán", "english": "attendant, waiter/waitress"},
    {"chinese": "白", "pinyin": "bái", "english": "white"},
    {"chinese": "黑", "pinyin": "hēi", "english": "black"},
    {"chinese": "贵", "pinyin": "guì", "english": "expensive"},
    {"chinese": "错", "pinyin": "cuò", "english": "wrong, incorrect"},
    {"chinese": "从", "pinyin": "cóng", "english": "from"},
    {"chinese": "跳舞", "pinyin": "tiào wǔ", "english": "to dance"},
    {"chinese": "第一", "pinyin": "dì yī", "english": "first"},
    {"chinese": "希望", "pinyin": "xīwàng", "english": "to hope, to wish"},
    {"chinese": "问题", "pinyin": "wèntí", "english": "question, problem"},
    {"chinese": "欢迎", "pinyin": "huānyíng", "english": "to welcome"},
    {"chinese": "上班", "pinyin": "shàng bān", "english": "to work, to do a job"},
    {"chinese": "懂", "pinyin": "dǒng", "english": "to understand, to know"},
    {"chinese": "完", "pinyin": "wán", "english": "to finish, to end"},
    {"chinese": "题", "pinyin": "tí", "english": "question, problem"},
    {"chinese": "课", "pinyin": "kè", "english": "class, lesson"},
    {"chinese": "帮助", "pinyin": "bāngzhù", "english": "to help, to assist, to aid"},
    {"chinese": "别", "pinyin": "bié", "english": "don't"},
    {"chinese": "哥哥", "pinyin": "gēge", "english": "elder brother"},
    {"chinese": "鸡蛋", "pinyin": "jīdàn", "english": "(hen's) egg"},
    {"chinese": "西瓜", "pinyin": "xīguā", "english": "watermelon"},
    {"chinese": "正在", "pinyin": "zhèngzài", "english": "in the process of"},
    {"chinese": "手机", "pinyin": "shǒujī", "english": "cell phone"},
    {"chinese": "洗", "pinyin": "xǐ", "english": "to wash, to bathe"},
    {"chinese": "唱歌", "pinyin": "chàng gē", "english": "to sing"},
    {"chinese": "男", "pinyin": "nán", "english": "man, male"},
    {"chinese": "女", "pinyin": "nǚ", "english": "woman, female"},
    {"chinese": "孩子", "pinyin": "háizi", "english": "child, kid"},
    {"chinese": "右边", "pinyin": "yòubian", "english": "right, right side"},
    {"chinese": "比", "pinyin": "bǐ", "english": "than, (superior or inferior) to"},
    {"chinese": "便宜", "pinyin": "piányi", "english": "cheap, inexpensive"},
    {"chinese": "说话", "pinyin": "shuō huà", "english": "to speak, to say, to talk"},
    {"chinese": "可能", "pinyin": "kěnéng", "english": "maybe, perhaps, probably"},
    {"chinese": "去年", "pinyin": "qùnián", "english": "last year"},
    {"chinese": "姓", "pinyin": "xìng", "english": "family name, surname"},
    {"chinese": "得", "pinyin": "de", "english": "used after a verb or an adjective to introduce a complement of result or degree"},
    {"chinese": "妻子", "pinyin": "qīzi", "english": "wife"},
    {"chinese": "弟弟", "pinyin": "dìdi", "english": "younger brother"},
    {"chinese": "近", "pinyin": "jìn", "english": "near, close"},
    {"chinese": "雪", "pinyin": "xuě", "english": "snow"},
    {"chinese": "零", "pinyin": "líng", "english": "zero"},
    {"chinese": "度", "pinyin": "dù", "english": "degree"},
    {"chinese": "穿", "pinyin": "chuān", "english": "to wear, to put on"},
    {"chinese": "进", "pinyin": "jìn", "english": "to enter, to come/go in"},
    {"chinese": "着", "pinyin": "zhe", "english": "used to indicate a state"},
    {"chinese": "班", "pinyin": "bān", "english": "class, grade, team"},
    {"chinese": "长", "pinyin": "zhǎng", "english": "to grow, to develop"},
    {"chinese": "笑", "pinyin": "xiào", "english": "to smile, to laugh"},
    {"chinese": "宾馆", "pinyin": "bīnguǎn", "english": "hotel"},
    {"chinese": "一直", "pinyin": "yìzhí", "english": "straight, all along"},
    {"chinese": "往", "pinyin": "wǎng", "english": "to, towards"},
    {"chinese": "路口", "pinyin": "lùkǒu", "english": "crossing, crossroads"},
    {"chinese": "有意思", "pinyin": "yǒu yìsi", "english": "interesting, fun"},
    {"chinese": "但是", "pinyin": "dànshì", "english": "but, still, yet"},
    {"chinese": "手", "pinyin": "shǒu", "english": "hand"},
    {"chinese": "拿", "pinyin": "ná", "english": "to hold, to take, to bring"},
    {"chinese": "铅笔", "pinyin": "qiānbǐ", "english": "pencil"},
    {"chinese": "杨笑笑", "pinyin": "Yáng Xiàoxiao", "english": "name of a person"},
    {"chinese": "虽然", "pinyin": "suīrán", "english": "although, though"},
    {"chinese": "次", "pinyin": "cì", "english": "time"},
    {"chinese": "玩儿", "pinyin": "wánr", "english": "to play, to have fun"},
    {"chinese": "百", "pinyin": "bǎi", "english": "hundred"},
    {"chinese": "晴", "pinyin": "qíng", "english": "sunny, fine, clear"},
    {"chinese": "大家", "pinyin": "dàjiā", "english": "all, everybody"},
    {"chinese": "更", "pinyin": "gèng", "english": "more, to a greater extent"},
    {"chinese": "阴", "pinyin": "yīn", "english": "overcast, cloudy"},
    {"chinese": "日", "pinyin": "rì", "english": "day, date"},
    {"chinese": "新年", "pinyin": "xīnnián", "english": "New Year"},
    {"chinese": "票", "pinyin": "piào", "english": "ticket"},
    {"chinese": "火车站", "pinyin": "huǒchēzhàn", "english": "railway station"},
    {"chinese": "妹妹", "pinyin": "mèimei", "english": "younger sister"}
  ],
  "HSK3": [
    {"chinese": "周末", "pinyin": "zhōumò", "english": "weekend"},
    {"chinese": "打算", "pinyin": "dǎsuàn", "english": "plan; to intend"},
    {"chinese": "啊", "pinyin": "a", "english": "used at the end of a sentence to indicate confirmation or defense"},
    {"chinese": "跟", "pinyin": "gēn", "english": "with"},
    {"chinese": "小刚", "pinyin": "Xiǎogāng", "english": "Xiaogang, name of a person"},
    {"chinese": "一直", "pinyin": "yìzhí", "english": "all the time"},
    {"chinese": "游戏", "pinyin": "yóuxì", "english": "game"},
    {"chinese": "作业", "pinyin": "zuòyè", "english": "homework"},
    {"chinese": "着急", "pinyin": "zháojí", "english": "worried, anxious"},
    {"chinese": "复习", "pinyin": "fùxí", "english": "to review"},
    {"chinese": "南(方)", "pinyin": "nán (fāng)", "english": "south, southern part"},
    {"chinese": "北方", "pinyin": "běifāng", "english": "north, northern part"},
    {"chinese": "面包", "pinyin": "miànbāo", "english": "bread"},
    {"chinese": "带", "pinyin": "dài", "english": "to take along, to bring"},
    {"chinese": "地图", "pinyin": "dìtú", "english": "map"},
    {"chinese": "搬", "pinyin": "bān", "english": "to move, to carry"},
    {"chinese": "腿", "pinyin": "tuǐ", "english": "leg"},
    {"chinese": "疼", "pinyin": "téng", "english": "hurt, painful"},
    {"chinese": "脚", "pinyin": "jiǎo", "english": "foot"},
    {"chinese": "树", "pinyin": "shù", "english": "tree"},
    {"chinese": "容易", "pinyin": "róngyì", "english": "easy"},
    {"chinese": "难", "pinyin": "nán", "english": "difficult"},
    {"chinese": "太太", "pinyin": "tàitai", "english": "Mrs., madam"},
    {"chinese": "秘书", "pinyin": "mìshū", "english": "secretary"},
    {"chinese": "经理", "pinyin": "jīnglǐ", "english": "manager"},
    {"chinese": "办公室", "pinyin": "bàngōngshì", "english": "office"},
    {"chinese": "周明", "pinyin": "Zhōu Míng", "english": "Zhou Ming, name of a person"},
    {"chinese": "辆", "pinyin": "liàng", "english": "used for vehicles"},
    {"chinese": "楼", "pinyin": "lóu", "english": "building"},
    {"chinese": "拿", "pinyin": "ná", "english": "to take, to fetch"},
    {"chinese": "把", "pinyin": "bǎ", "english": "used for things with a handle"},
    {"chinese": "伞", "pinyin": "sǎn", "english": "umbrella"},
    {"chinese": "胖", "pinyin": "pàng", "english": "fat"},
    {"chinese": "其实", "pinyin": "qíshí", "english": "actually"},
    {"chinese": "瘦", "pinyin": "shòu", "english": "thin"},
    {"chinese": "还是", "pinyin": "háishi", "english": "or"},
    {"chinese": "爬山", "pinyin": "pá shān", "english": "to climb a mountain"},
    {"chinese": "小心", "pinyin": "xiǎoxīn", "english": "careful"},
    {"chinese": "条", "pinyin": "tiáo", "english": "used for pants, dresses, etc."},
    {"chinese": "裤子", "pinyin": "kùzi", "english": "pants"},
    {"chinese": "记得", "pinyin": "jìde", "english": "to remember"},
    {"chinese": "衬衫", "pinyin": "chènshān", "english": "shirt"},
    {"chinese": "元", "pinyin": "yuán", "english": "unit of money"},
    {"chinese": "新鲜", "pinyin": "xīnxiān", "english": "fresh"},
    {"chinese": "甜", "pinyin": "tián", "english": "sweet"},
    {"chinese": "只", "pinyin": "zhǐ", "english": "only, solely"},
    {"chinese": "放", "pinyin": "fàng", "english": "to put, to place"},
    {"chinese": "饮料", "pinyin": "yǐnliào", "english": "drink, beverage"},
    {"chinese": "或者", "pinyin": "huòzhě", "english": "or"},
    {"chinese": "舒服", "pinyin": "shūfu", "english": "comfortable"},
    {"chinese": "花", "pinyin": "huā", "english": "flower"},
    {"chinese": "绿", "pinyin": "lǜ", "english": "green"},
    {"chinese": "比赛", "pinyin": "bǐsài", "english": "match, competition"},
    {"chinese": "照片", "pinyin": "zhàopiàn", "english": "photo"},
    {"chinese": "年级", "pinyin": "niánjí", "english": "grade"},
    {"chinese": "又", "pinyin": "yòu", "english": "and"},
    {"chinese": "马可", "pinyin": "Mǎkě", "english": "Marco"},
    {"chinese": "聪明", "pinyin": "cōngming", "english": "clever, smart"},
    {"chinese": "热情", "pinyin": "rèqíng", "english": "warm, enthusiastic"},
    {"chinese": "努力", "pinyin": "nǔlì", "english": "hard-working"},
    {"chinese": "总是", "pinyin": "zǒngshì", "english": "always"},
    {"chinese": "回答", "pinyin": "huídá", "english": "to answer"},
    {"chinese": "站", "pinyin": "zhàn", "english": "to stand"},
    {"chinese": "饿", "pinyin": "è", "english": "hungry"},
    {"chinese": "超市", "pinyin": "chāoshì", "english": "supermarket"},
    {"chinese": "蛋糕", "pinyin": "dàngāo", "english": "cake"},
    {"chinese": "年轻", "pinyin": "niánqīng", "english": "young"},
    {"chinese": "认真", "pinyin": "rènzhēn", "english": "serious, earnest"},
    {"chinese": "客人", "pinyin": "kèrén", "english": "customer, guest"},
    {"chinese": "李小美", "pinyin": "Lǐ Xiǎoměi", "english": "Li Xiaomei, name of a person"},
    {"chinese": "发烧", "pinyin": "fā shāo", "english": "to have a fever"},
    {"chinese": "为", "pinyin": "wèi", "english": "for"},
    {"chinese": "照顾", "pinyin": "zhàogù", "english": "to take care of"},
    {"chinese": "用", "pinyin": "yòng", "english": "to need"},
    {"chinese": "感冒", "pinyin": "gǎnmào", "english": "to catch a cold"},
    {"chinese": "张", "pinyin": "Zhāng", "english": "Zhang, a surname"},
    {"chinese": "季节", "pinyin": "jìjié", "english": "season"},
    {"chinese": "当然", "pinyin": "dāngrán", "english": "of course"},
    {"chinese": "春(天)", "pinyin": "chūn (tiān)", "english": "spring"},
    {"chinese": "草", "pinyin": "cǎo", "english": "grass"},
    {"chinese": "夏(天)", "pinyin": "xià (tiān)", "english": "summer"},
    {"chinese": "裙子", "pinyin": "qúnzi", "english": "dress, skirt"},
    {"chinese": "最近", "pinyin": "zuìjìn", "english": "lately, recently"},
    {"chinese": "越", "pinyin": "yuè", "english": "more, to a greater degree"},
    {"chinese": "眼镜", "pinyin": "yǎnjìng", "english": "glasses, spectacles"},
    {"chinese": "突然", "pinyin": "tūrán", "english": "suddenly"},
    {"chinese": "离开", "pinyin": "lí kāi", "english": "to leave, to part with"},
    {"chinese": "清楚", "pinyin": "qīngchu", "english": "clear, distinct"},
    {"chinese": "刚才", "pinyin": "gāngcái", "english": "just now"},
    {"chinese": "帮忙", "pinyin": "bāng máng", "english": "to help"},
    {"chinese": "特别", "pinyin": "tèbié", "english": "extraordinarily"},
    {"chinese": "讲", "pinyin": "jiǎng", "english": "to explain"},
    {"chinese": "明白", "pinyin": "míngbai", "english": "clear"},
    {"chinese": "锻炼", "pinyin": "duànliàn", "english": "to do physical exercise"},
    {"chinese": "音乐", "pinyin": "yīnyuè", "english": "music"},
    {"chinese": "公园", "pinyin": "gōngyuán", "english": "park"},
    {"chinese": "聊天(儿)", "pinyin": "liáo tiān (r)", "english": "to chat"},
    {"chinese": "睡着", "pinyin": "shuì zháo", "english": "to fall asleep"},
    {"chinese": "更", "pinyin": "gèng", "english": "more, even more"},
    {"chinese": "同事", "pinyin": "tóngshì", "english": "colleague"},
    {"chinese": "以前", "pinyin": "yǐqián", "english": "before, ago"},
    {"chinese": "银行", "pinyin": "yínháng", "english": "bank"},
    {"chinese": "久", "pinyin": "jiǔ", "english": "for a long time, long"},
    {"chinese": "感兴趣", "pinyin": "gǎn xìngqù", "english": "to be interested in"},
    {"chinese": "结婚", "pinyin": "jié hūn", "english": "to marry, to get married"},
    {"chinese": "欢迎", "pinyin": "huānyíng", "english": "to welcome"},
    {"chinese": "迟到", "pinyin": "chídào", "english": "to be late"},
    {"chinese": "半", "pinyin": "bàn", "english": "half"},
    {"chinese": "接", "pinyin": "jiē", "english": "to meet (sb.), to pick up (sb.)"},
    {"chinese": "刻", "pinyin": "kè", "english": "quarter"},
    {"chinese": "差", "pinyin": "chà", "english": "to fall short of"}
  ]
};

const ALL_WORDS = [
  ...RAW_VOCAB.HSK1.map((w, i) => ({...w, id: `HSK1-${i}`, level: 'HSK1'})),
  ...RAW_VOCAB.HSK2.map((w, i) => ({...w, id: `HSK2-${i}`, level: 'HSK2'})),
  ...RAW_VOCAB.HSK3.map((w, i) => ({...w, id: `HSK3-${i}`, level: 'HSK3'}))
];

document.getElementById('navVocabBtn').textContent = `Vocabulary (${ALL_WORDS.length})`;
document.getElementById('pillALL').textContent = `All (${ALL_WORDS.length})`;
document.getElementById('pillHSK1').textContent = `HSK 1 (${RAW_VOCAB.HSK1.length})`;
document.getElementById('pillHSK2').textContent = `HSK 2 (${RAW_VOCAB.HSK2.length})`;
document.getElementById('pillHSK3').textContent = `HSK 3 (${RAW_VOCAB.HSK3.length})`;

let learnedIds = new Set(JSON.parse(localStorage.getItem('zhongwen_hsk12_v2_learned') || '[]'));
let currentLevel = 'ALL';
let currentView = 'home';
let currentDeck = [...ALL_WORDS];
let isDeckShuffled = false;
let fcIndex = 0;
let fcRevealed = false;
let quizScore = 0;
let quizTotal = 0;
let quizMode = 'char-to-english';
let currentQuizWord = null;
let writers = [];

function cleanHanziForStroke(str) {
  return str.replace(/\s*\([^)]*\)/g, '').replace(/[…\.]/g, '').trim();
}

function renderHomeStats() {
  const grid = document.getElementById('homeStatsGrid');
  grid.innerHTML = `
    <div class="stat-tile">
      <div class="stat-num">${ALL_WORDS.length}</div>
      <div class="stat-label">Total Vocabulary Words</div>
    </div>
    <div class="stat-tile">
      <div class="stat-num">${RAW_VOCAB.HSK1.length} / ${RAW_VOCAB.HSK2.length} / ${RAW_VOCAB.HSK3.length}</div>
      <div class="stat-label">HSK 1 · HSK 2 · HSK 3</div>
    </div>
    <div class="stat-tile">
      <div class="stat-num">${learnedIds.size}</div>
      <div class="stat-label">Words Mastered</div>
    </div>
    <div class="stat-tile">
      <div class="stat-num">${Math.round((learnedIds.size / ALL_WORDS.length) * 100)}%</div>
      <div class="stat-label">Overall Completion</div>
    </div>
  `;
}

function saveLearned() {
  localStorage.setItem('zhongwen_hsk12_v2_learned', JSON.stringify([...learnedIds]));
  renderHomeStats();
}

function getFilteredWords() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  return ALL_WORDS.filter(w => {
    if (currentLevel === 'HSK1' && w.level !== 'HSK1') return false;
    if (currentLevel === 'HSK2' && w.level !== 'HSK2') return false;
    if (currentLevel === 'HSK3' && w.level !== 'HSK3') return false;
    if (currentLevel === 'UNLEARNED' && learnedIds.has(w.id)) return false;
    if (currentView === 'dictionary' && q) {
      return (
        w.chinese.includes(q) ||
        w.pinyin.toLowerCase().includes(q) ||
        w.english.toLowerCase().includes(q)
      );
    }
    return true;
  });
}

function setLevelFilter(level) {
  currentLevel = level;
  document.querySelectorAll('.filter-pills .pill').forEach(p => {
    p.classList.toggle('active', p.dataset.level === level);
  });
  refreshCurrentView();
}

function switchView(view) {
  currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === view);
  });

  const showFilterBar = ['dictionary', 'flashcards', 'quiz'].includes(view);
  document.getElementById('sharedControls').style.display = showFilterBar ? 'flex' : 'none';
  document.getElementById('searchContainer').style.display = view === 'dictionary' ? 'block' : 'none';
  document.getElementById('navLinks').classList.remove('open');

  if (view === 'home') renderHomeStats();
  else refreshCurrentView();
}

function refreshCurrentView() {
  currentDeck = getFilteredWords();
  if (currentDeck.length === 0) currentDeck = [...ALL_WORDS];
  isDeckShuffled = false;
  if (currentView === 'dictionary') renderDictionary();
  if (currentView === 'flashcards') {
    fcIndex = 0;
    renderFlashcard();
  }
  if (currentView === 'quiz') generateQuiz();
}

function toggleMobileMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  document.getElementById('themeToggle').textContent = next === 'dark' ? '☀️' : '🌙';
}

/* Universal Cross-Platform Audio Engine (Mobile, WeChat, & Desktop) */
let cachedZhVoice = null;
let currentAudioPlayer = null;

function loadChineseVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  cachedZhVoice =
    voices.find(v => v.lang === 'zh-CN' && !v.localService) ||
    voices.find(v => v.lang === 'zh-CN') ||
    voices.find(v => v.lang.toLowerCase().startsWith('zh')) ||
    null;
  return cachedZhVoice;
}

if ('speechSynthesis' in window) {
  loadChineseVoice();
  window.speechSynthesis.onvoiceschanged = loadChineseVoice;
}

function playCloudAudio(cleanedText) {
  if (currentAudioPlayer) {
    currentAudioPlayer.pause();
    currentAudioPlayer = null;
  }

  const encoded = encodeURIComponent(cleanedText);
  const sources = [
    `https://dict.youdao.com/dictvoice?audio=${encoded}&type=2`,
    `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encoded}`
  ];

  let attempt = 0;
  const tryPlay = () => {
    if (attempt >= sources.length) return;
    const audio = new Audio(sources[attempt]);
    currentAudioPlayer = audio;
    audio.onerror = () => {
      attempt++;
      tryPlay();
    };
    audio.play().catch(() => {
      attempt++;
      tryPlay();
    });
  };

  tryPlay();
}

function speakText(text) {
  const cleaned = cleanHanziForStroke(text);
  if (!cleaned) return;

  const isMobile = /Android|iPhone|iPad|iPod|MicroMessenger|Mobile/i.test(navigator.userAgent);
  const voice = cachedZhVoice || loadChineseVoice();

  if (isMobile || !('speechSynthesis' in window) || !voice) {
    playCloudAudio(cleaned);
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(cleaned);
    utter.voice = voice;
    utter.lang = 'zh-CN';
    utter.rate = 0.88;
    utter.onerror = () => playCloudAudio(cleaned);
    window.speechSynthesis.speak(utter);
  } catch (e) {
    playCloudAudio(cleaned);
  }
}

function toggleLearned(id) {
  if (learnedIds.has(id)) learnedIds.delete(id);
  else learnedIds.add(id);
  saveLearned();
  renderDictionary();
}

function renderDictionary() {
  const list = getFilteredWords();
  const grid = document.getElementById('vocabGrid');
  const stats = document.getElementById('statsStrip');

  stats.innerHTML = `
    <span>Showing <strong>${list.length}</strong> words</span>
    <span>•</span>
    <span>Mastered: <strong>${learnedIds.size}</strong> / ${ALL_WORDS.length}</span>
  `;

  grid.innerHTML = list.map(w => {
    const isDone = learnedIds.has(w.id);
    return `
      <div class="word-card ${isDone ? 'learned' : ''}">
        <div>
          <div class="card-top">
            <span class="level-tag">${w.level}</span>
            <div class="card-actions">
              <button class="mini-btn" title="Pronounce" onclick="speakText('${w.chinese.replace(/'/g, "\\'")}')">🔊</button>
              <button class="mini-btn" title="Stroke Order" onclick="openStrokeModal('${w.chinese.replace(/'/g, "\\'")}', '${w.pinyin.replace(/'/g, "\\'")}', '${w.english.replace(/'/g, "\\'")}')">✍️</button>
              <button class="mini-btn ${isDone ? 'done' : ''}" title="Mark Learned" onclick="toggleLearned('${w.id}')">✓</button>
            </div>
          </div>
          <div class="hanzi">${w.chinese}</div>
          <div class="pinyin">${w.pinyin}</div>
        </div>
        <div class="english">${w.english}</div>
      </div>
    `;
  }).join('');
}

/* Flashcards + Shuffle */
function shuffleDeck() {
  for (let i = currentDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]];
  }
  isDeckShuffled = true;
  fcIndex = 0;
  renderFlashcard();
}

function resetDeckOrder() {
  currentDeck = getFilteredWords();
  if (currentDeck.length === 0) currentDeck = [...ALL_WORDS];
  isDeckShuffled = false;
  fcIndex = 0;
  renderFlashcard();
}

function renderFlashcard() {
  const w = currentDeck[fcIndex];
  fcRevealed = false;
  const shuffleBadge = isDeckShuffled ? ` · <span style="color:var(--accent-text); font-weight:600;">Shuffled</span>` : '';
  document.getElementById('fcCounter').innerHTML = `Card <strong>${fcIndex + 1}</strong> of <strong>${currentDeck.length}</strong>${shuffleBadge}`;
  document.getElementById('fcLevel').textContent = w.level;
  document.getElementById('fcHanzi').textContent = w.chinese;
  document.getElementById('fcPinyin').textContent = w.pinyin;
  document.getElementById('fcEnglish').textContent = w.english;
  document.getElementById('fcPinyin').style.display = 'none';
  document.getElementById('fcEnglish').style.display = 'none';
  document.getElementById('fcHint').style.display = 'block';
  const isDone = learnedIds.has(w.id);
  const markBtn = document.getElementById('fcMarkBtn');
  markBtn.textContent = isDone ? '✓ Mastered' : '✓ Mark Learned';
  markBtn.style.borderColor = isDone ? 'var(--success)' : 'var(--border)';
}

function flipCard() {
  fcRevealed = !fcRevealed;
  document.getElementById('fcPinyin').style.display = fcRevealed ? 'block' : 'none';
  document.getElementById('fcEnglish').style.display = fcRevealed ? 'block' : 'none';
  document.getElementById('fcHint').style.display = fcRevealed ? 'none' : 'block';
  if (fcRevealed) speakCurrentCard();
}

function speakCurrentCard() {
  speakText(currentDeck[fcIndex].chinese);
}

function nextCard() {
  fcIndex = (fcIndex + 1) % currentDeck.length;
  renderFlashcard();
}

function prevCard() {
  fcIndex = (fcIndex - 1 + currentDeck.length) % currentDeck.length;
  renderFlashcard();
}

function toggleLearnedCurrentCard() {
  const id = currentDeck[fcIndex].id;
  if (learnedIds.has(id)) learnedIds.delete(id);
  else learnedIds.add(id);
  saveLearned();
  renderFlashcard();
}

/* 5-Mode Quiz System */
function changeQuizMode(mode) {
  quizMode = mode;
  generateQuiz();
}

function generateQuiz() {
  const pool = currentDeck.length >= 4 ? currentDeck : ALL_WORDS;
  const correct = pool[Math.floor(Math.random() * pool.length)];
  currentQuizWord = correct;

  const distractors = [];
  while (distractors.length < 3) {
    const candidate = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];
    const sameTarget =
      candidate.chinese === correct.chinese ||
      (quizMode === 'char-to-pinyin' && candidate.pinyin.toLowerCase() === correct.pinyin.toLowerCase()) ||
      (quizMode === 'char-to-english' && candidate.english.toLowerCase() === correct.english.toLowerCase());

    const duplicateDistractor = distractors.some(
      d =>
        d.chinese === candidate.chinese ||
        (quizMode === 'char-to-pinyin' && d.pinyin.toLowerCase() === candidate.pinyin.toLowerCase())
    );

    if (!sameTarget && !duplicateDistractor) {
      distractors.push(candidate);
    }
  }

  const options = [correct, ...distractors].sort(() => Math.random() - 0.5);

  document.getElementById('quizLevel').textContent = correct.level;
  const qEl = document.getElementById('quizQuestion');
  const audioWrap = document.getElementById('quizAudioWrap');

  if (quizMode === 'char-to-pinyin' || quizMode === 'char-to-english') {
    qEl.style.display = 'block';
    qEl.style.fontSize = '3.5rem';
    qEl.style.fontFamily = "'Noto Sans SC', sans-serif";
    qEl.style.color = 'var(--text)';
    qEl.textContent = correct.chinese;
    audioWrap.innerHTML = `<button class="mini-btn" style="margin: 0 auto;" onclick="speakText(currentQuizWord.chinese)" title="Listen">🔊</button>`;
  } else if (quizMode === 'pinyin-to-char') {
    qEl.style.display = 'block';
    qEl.style.fontSize = '2.2rem';
    qEl.style.fontFamily = "'Poppins', sans-serif";
    qEl.style.color = 'var(--accent-text)';
    qEl.textContent = correct.pinyin;
    audioWrap.innerHTML = `<button class="mini-btn" style="margin: 0 auto;" onclick="speakText(currentQuizWord.chinese)" title="Listen">🔊</button>`;
  } else if (quizMode === 'english-to-char') {
    qEl.style.display = 'block';
    qEl.style.fontSize = '1.55rem';
    qEl.style.fontFamily = "'Poppins', sans-serif";
    qEl.style.color = 'var(--text)';
    qEl.textContent = correct.english;
    audioWrap.innerHTML = '';
  } else if (quizMode === 'listen-to-char') {
    qEl.style.display = 'none';
    audioWrap.innerHTML = `
      <button class="listen-hero-btn" onclick="speakText(currentQuizWord.chinese)">
        🔊 Play Pronunciation
      </button>
      <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.45rem;">Listen and choose the matching Chinese character</div>
    `;
    speakText(correct.chinese);
  }

  const optContainer = document.getElementById('quizOptions');
  document.getElementById('nextQuizBtn').style.display = 'none';

  const isCharOptions = ['pinyin-to-char', 'english-to-char', 'listen-to-char'].includes(quizMode);

  optContainer.innerHTML = options.map(opt => {
    let label = '';
    if (quizMode === 'char-to-pinyin') label = opt.pinyin;
    else if (quizMode === 'char-to-english') label = opt.english;
    else label = opt.chinese;

    return `<button class="quiz-option ${isCharOptions ? 'hanzi-opt' : ''}" onclick="handleQuizAnswer(this, '${opt.id === correct.id}')">${label}</button>`;
  }).join('');
}

function handleQuizAnswer(btn, isCorrectStr) {
  const isCorrect = isCorrectStr === 'true';
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach(b => (b.disabled = true));

  quizTotal++;
  if (isCorrect) {
    quizScore++;
    btn.classList.add('correct');
    if (quizMode !== 'listen-to-char') speakText(currentQuizWord.chinese);
  } else {
    btn.classList.add('wrong');
    buttons.forEach(b => {
      if (b.getAttribute('onclick').includes("'true'")) b.classList.add('correct');
    });
  }

  document.getElementById('quizScore').textContent = quizScore;
  document.getElementById('quizTotal').textContent = quizTotal;
  document.getElementById('nextQuizBtn').style.display = 'inline-block';
}

function openStrokeModal(chinese, pinyin, english) {
  document.getElementById('modalTitle').textContent = `${chinese} · ${pinyin}`;
  document.getElementById('modalSubtitle').textContent = english;
  const container = document.getElementById('strokeTargets');
  container.innerHTML = '';
  writers = [];

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const strokeColor = isDark ? '#f3f4f6' : '#111827';
  const outlineColor = isDark ? '#33333a' : '#d1d5db';
  const cleanChars = [...cleanHanziForStroke(chinese)];

  cleanChars.forEach((char, idx) => {
    const div = document.createElement('div');
    div.className = 'writer-box';
    div.id = `writer-char-${idx}`;
    container.appendChild(div);

    const writer = HanziWriter.create(div.id, char, {
      width: 135,
      height: 135,
      padding: 8,
      strokeAnimationSpeed: 1.1,
      delayBetweenStrokes: 180,
      strokeColor: strokeColor,
      radicalColor: '#ff9e00',
      outlineColor: outlineColor,
      showOutline: true
    });
    writers.push(writer);
  });

  document.getElementById('strokeModal').classList.add('open');
  speakText(chinese);
  animateAllStrokes();
}

function closeStrokeModal() {
  document.getElementById('strokeModal').classList.remove('open');
}

async function animateAllStrokes() {
  for (const w of writers) {
    await new Promise(res => w.animateCharacter({onComplete: res}));
  }
}

function quizAllStrokes() {
  writers.forEach(w => w.quiz());
}

// Initialize
renderHomeStats();
renderDictionary();
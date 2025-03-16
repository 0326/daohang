
/**
 * 查询指定分类的网站列表，如果用户登录则返回网站是否被该用户收藏的信息
 * @param models
 * @param categoryId
 * @returns
 */
export async function queryWebsite(models, categoryId?: string) {
  const where: any = {}
  if (categoryId) {
    where.category_id = {
      $eq: categoryId
    }
  }
  const { data } = await models.nav_website.list({
    filter: {
      where,
    },
    select: {
      _id: true,
      name: true,
      favicon: true,
      cover: true,
      description: true,
      url: true,
      category_id: {
        _id: true,
        name: true
      },
      star_website: {
        _id: true,
      }
    },
    pageSize: 100, // 分页大小，建议指定，如需设置为其它值，需要和 pageNumber 配合使用，两者同时指定才会生效
    pageNumber: 1, // 第几页
    getCount: true, // 开启用来获取总数
  });

  return data
}

const mockData = [
  {
      "name": "Deepseek",
      "description": "用于编码和聊天的高级AI平台，带有开源模型。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173889766207933747.png",
      "favicon": "https://www.deepseek.com/favicon.ico",
      "url": "https://www.deepseek.com"
  },
  {
      "name": "JanitorAI",
      "description": "使用Janitor AI创建具有不同个性的NSFW虚构聊天机器人角色。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171695510423442917.png",
      "favicon": "https://janitorai.com/favicon.ico",
      "url": "https://janitorai.com"
  },
  {
      "name": "Nume",
      "description": "每位创始人需要的AI首席财务官",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173225617745960163.jpg",
      "favicon": "https://www.nume.finance//favicon.ico",
      "url": "https://www.nume.finance/"
  },
  {
      "name": "Kimi Chat",
      "description": "拥有无限记忆力的智能助手。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173163887028515010.png",
      "favicon": "https://kimi.moonshot.cn/favicon.ico",
      "url": "https://kimi.moonshot.cn"
  },
  {
      "name": "Jotform AI Agents",
      "description": "使用友好的AI代理提供自动化客户服务解决方案。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173927259987627300.jpg",
      "favicon": "https://link.jotform.com/toolify-OiGSs9MnIi/favicon.ico",
      "url": "https://link.jotform.com/toolify-OiGSs9MnIi"
  },
  {
      "name": "Poe",
      "description": "由人工智能驱动的平台，提供即时问题回答和互动对话功能。",
      "cover": "https://cdn-images.toolify.ai/image/b8f175eb703798c01cd2415e95353122.jpeg",
      "favicon": "https://poe.com/favicon.ico",
      "url": "https://poe.com"
  },
  {
      "name": "PolyBuzz",
      "description": "PolyBuzz 提供免费的、私密的以及无限制的 AI 聊天和沉浸式角色扮演，拥有超过 2000 万个角色。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173250336353707707.jpg",
      "favicon": "https://www.polybuzz.ai//favicon.ico",
      "url": "https://www.polybuzz.ai/"
  },
  {
      "name": "CrushOn.AI",
      "description": "无限对话和真实互动。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/169790167776932300.png",
      "favicon": "https://crushon.ai/favicon.ico",
      "url": "https://crushon.ai"
  },
  {
      "name": "EDENAI",
      "description": "连接你的AI灵魂伴侣。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173711361629916376.jpg",
      "favicon": "https://edenai.world//favicon.ico",
      "url": "https://edenai.world/"
  },
  {
      "name": "Rubii",
      "description": "Rubii：AI原生粉丝角色用户生成内容平台。创建您的角色、背景和舞台。创建互动故事，与虚拟伙伴聊天，探索用户生成的内容。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/user-upload/1730877391_57699507",
      "favicon": "https://rubii.ai/favicon.ico",
      "url": "https://rubii.ai"
  },
  {
      "name": "Gauthmath",
      "description": "提供准确答案的免费数学作业帮助。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170350416277838907.jpg",
      "favicon": "https://gauthmath.com/favicon.ico",
      "url": "https://gauthmath.com"
  },
  {
      "name": "Talkie AI",
      "description": "以逼真而沉浸的方式与您的梦想角色会面和聊天",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171172105040061012.webp",
      "favicon": "https://www.talkie-ai.com/favicon.ico",
      "url": "https://www.talkie-ai.com"
  },
  {
      "name": "YesChat",
      "description": "免费对话的Claude 2提供的先进聊天机器人。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170815406425763853.jpg",
      "favicon": "https://yeschat.ai/favicon.ico",
      "url": "https://yeschat.ai"
  },
  {
      "name": "AI PDF Summarizer",
      "description": "使用AI简化PDF！摘要、提取关键点、提问，并支持80多种语言翻译。非常适合工作、学习或研究。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173893608573651170.jpg",
      "favicon": "https://pdfguru.com/ai-pdf-summarizer/favicon.ico",
      "url": "https://pdfguru.com/ai-pdf-summarizer"
  },
  {
      "name": "GPTGirlfriend",
      "description": "一个无审查的人工智能伴侣聊天室，用于非限制和限制级对话。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170009903124175196.jpg",
      "favicon": "https://gptgirlfriend.online/favicon.ico",
      "url": "https://gptgirlfriend.online"
  },
  {
      "name": "Merlin AI",
      "description": "一键访问AI驱动的ChatGPT、GPT-4、Claude2和Llama 2，适用于所有网站。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171173584890263195.webp",
      "favicon": "https://www.getmerlin.in//favicon.ico",
      "url": "https://www.getmerlin.in/"
  },
  {
      "name": "iAsk Ai Generative Ai Search Engine",
      "description": "iAsk.Ai是一个免费的AI搜索引擎，提供立即准确的答案，而不存储用户数据。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168804484124012471.jpg",
      "favicon": "https://iAsk.Ai/favicon.ico",
      "url": "https://iAsk.Ai"
  },
  {
      "name": "Felo",
      "description": "全球知识的多语言AI搜索引擎",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172135267494694817.jpg",
      "favicon": "https://felo.ai/favicon.ico",
      "url": "https://felo.ai"
  },
  {
      "name": "PepHop",
      "description": "一款开创性的AI角色聊天平台。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/169348458082555646.jpg",
      "favicon": "https://pephop.ai/nsfw-character-ai/favicon.ico",
      "url": "https://pephop.ai/nsfw-character-ai"
  },
  {
      "name": "Chai",
      "description": "使用Chai AI，这款顶级聊天机器人应用程序，可以创建、分享和探索聊天机器人。",
      "cover": "https://cdn-images.toolify.ai/image/7acfddb76a96223b4371f71f35295cb2.jpeg",
      "favicon": "https://chai.ml/favicon.ico",
      "url": "https://chai.ml"
  },
  {
      "name": "Pi by Inflection AI",
      "description": "一个用于对话、友好建议和简明信息的人工智能伴侣。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168387138243146530.png",
      "favicon": "https://pi.ai/talk/favicon.ico",
      "url": "https://pi.ai/talk"
  },
  {
      "name": "Groq",
      "description": "GroqLabs开发的人工智能语言接口。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170851101575539048.jpg",
      "favicon": "https://groq.com/favicon.ico",
      "url": "https://groq.com"
  },
  {
      "name": "Aroused.AI",
      "description": "沉浸式的人工智能成人娱乐",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171211290672829730.png",
      "favicon": "https://www.aroused.ai//favicon.ico",
      "url": "https://www.aroused.ai/"
  },
  {
      "name": "DocsBot AI",
      "description": "创建定制聊天机器人，从文档中生成内容，通过基于AI的聊天机器人改善支持体验。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168580619358482043.jpg",
      "favicon": "https://docsbot.ai/favicon.ico",
      "url": "https://docsbot.ai"
  },
  {
      "name": "UPDF AI",
      "description": "一款实用的AI PDF编辑器，具备编辑、注释、转换、AI聊天和PDF到思维导图转换工具！",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173260080235498561.jpg",
      "favicon": "https://updf.com/favicon.ico",
      "url": "https://updf.com"
  },
  {
      "name": "Chad AI",
      "description": "用于俄文文本生成和代码分析的 AI 聊天机器人",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172199854130760369.jpg",
      "favicon": "https://chadgpt.ru/favicon.ico",
      "url": "https://chadgpt.ru"
  },
  {
      "name": "Kindroid",
      "description": "为AI对话、自拍和声音建立您定制的AI角色和伙伴。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170349962465134309.jpg",
      "favicon": "https://kindroid.ai/favicon.ico",
      "url": "https://kindroid.ai"
  },
  {
      "name": "AnythingLLM",
      "description": "一体化的桌面AI应用，提升生产力，保护隐私，提供灵活性。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172475048114137907.jpg",
      "favicon": "https://anythingllm.com/favicon.ico",
      "url": "https://anythingllm.com"
  },
  {
      "name": "GitMind Chat",
      "description": "您最好的AI助手",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170973377811285843.webp",
      "favicon": "https://gitmind.com/ai-chat/favicon.ico",
      "url": "https://gitmind.com/ai-chat"
  },
  {
      "name": "Pygmalion AI",
      "description": "聊天AI项目",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171635629762365852.webp",
      "favicon": "https://pygmalion.chat/favicon.ico",
      "url": "https://pygmalion.chat"
  },
  {
      "name": "Dream Companion",
      "description": "Dream Companion是您的终极AI女友聊天机器人+18和虚拟女友平台。再也没有比这更好的了。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172118529148383011.jpg",
      "favicon": "https://www.mydreamcompanion.com/favicon.ico",
      "url": "https://www.mydreamcompanion.com"
  },
  {
      "name": "AIChatting",
      "description": "在AiChatting.net上与聊天机器人聊天并生成文本内容。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168804398780395282.jpg",
      "favicon": "https://www.aichatting.net/favicon.ico",
      "url": "https://www.aichatting.net"
  },
  {
      "name": "Chatfai",
      "description": "ChatFAI是一个互动的网站，用户可以与虚构角色聊天。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168337963117615672.jpg",
      "favicon": "https://chatfai.com/favicon.ico",
      "url": "https://chatfai.com"
  },
  {
      "name": "VMate AI",
      "description": "与虚拟AI动漫角色互动。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171542260648187050.webp",
      "favicon": "https://vmateai.com/favicon.ico",
      "url": "https://vmateai.com"
  },
  {
      "name": "Replika",
      "description": "Replika是一个提供情感支持和模仿用户文本风格的AI聊天机器人。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/16793033866122063.png",
      "favicon": "https://replika.com/favicon.ico",
      "url": "https://replika.com"
  },
  {
      "name": "Taskade",
      "description": "Taskade是一个通过AI助手和各种功能提高团队生产力的平台。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/167844541039463675.png",
      "favicon": "https://taskade.com/favicon.ico",
      "url": "https://taskade.com"
  },
  {
      "name": "CraveU AI",
      "description": "首屈一指的成人AI聊天机器人平台，提供无限制的互动体验",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172412158625210476.jpg",
      "favicon": "https://craveu.ai/favicon.ico",
      "url": "https://craveu.ai"
  },
  {
      "name": "Coze",
      "description": "一个带有LLM的AI聊天机器人开发平台。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170477858937753392.jpg",
      "favicon": "https://www.coze.com/favicon.ico",
      "url": "https://www.coze.com"
  },
  {
      "name": "Nova - ChatGPT AI Chatbot",
      "description": "革命性AI聊天机器人。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170349914074808788.jpg",
      "favicon": "https://novaapp.ai/favicon.ico",
      "url": "https://novaapp.ai"
  },
  {
      "name": "Voiceflow ai",
      "description": "Voiceflow是一个团队共同构建和发布聊天和语音助手的平台。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168267085665188485.jpg",
      "favicon": "https://voiceflow.com/favicon.ico",
      "url": "https://voiceflow.com"
  },
  {
      "name": "Hi Waifu",
      "description": "Waifu是一个AI伴友，支持并增强沟通技巧。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168532656865480553.jpg",
      "favicon": "https://hiwaifu.com/favicon.ico",
      "url": "https://hiwaifu.com"
  },
  {
      "name": "RPRP AI",
      "description": "一个创建和角色扮演 AI 聊天机器人的平台。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172601970885165068.jpg",
      "favicon": "https://rprp.ai/favicon.ico",
      "url": "https://rprp.ai"
  },
  {
      "name": "PlantIn plant care identifier",
      "description": "您的快速植物识别、专家护理建议的诊断首选解决方案。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172947802640444039.jpg",
      "favicon": "https://myplantin.com/plant-identifier/favicon.ico",
      "url": "https://myplantin.com/plant-identifier"
  },
  {
      "name": "Gupshup",
      "description": "对话式消息平台，用于更好的客户参与。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170349946684178984.jpg",
      "favicon": "https://gupshup.io/favicon.ico",
      "url": "https://gupshup.io"
  },
  {
      "name": "GlobalGPT",
      "description": "一个集中式平台，免费访问诸如ChatGPT等AI工具。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173902671182707933.jpg",
      "favicon": "https://www.glbgpt.com/favicon.ico",
      "url": "https://www.glbgpt.com"
  },
  {
      "name": "Botify AI",
      "description": "与来自不同类型的 AI 角色聊天。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172761743539222978.jpg",
      "favicon": "https://botify.ai/favicon.ico",
      "url": "https://botify.ai"
  },
  {
      "name": "PizzaGPT - ChatGPT for Italy",
      "description": "PizzaGPT是一个类似ChatGPT的意大利聊天机器人。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170349931888155480.jpg",
      "favicon": "https://pizzagpt.it/favicon.ico",
      "url": "https://pizzagpt.it"
  },
  {
      "name": "NSFW AI CHAT AI",
      "description": "用于角色扮演的在线AI聊天平台。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171150730635054843.png",
      "favicon": "https://nsfwaichat.com/favicon.ico",
      "url": "https://nsfwaichat.com"
  },
  {
      "name": "Landbot AI",
      "description": "Landbot是一个多功能聊天机器人构建工具，不需要编码知识。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168517653440784056.jpg",
      "favicon": "https://get.landbotlab.com/8lnsozu2hy80/favicon.ico",
      "url": "https://get.landbotlab.com/8lnsozu2hy80"
  },
  {
      "name": "Chaindesk AI",
      "description": "使用Chaindesk创建定制的AI聊天机器人，以简化客户支持。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/169184948725578198.jpg",
      "favicon": "https://www.chaindesk.ai//favicon.ico",
      "url": "https://www.chaindesk.ai/"
  },
  {
      "name": "ChatHub",
      "description": "ChatHub是一个浏览器扩展，可以同时使用多个聊天机器人。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168571847793188003.jpg",
      "favicon": "https://chathub.gg//favicon.ico",
      "url": "https://chathub.gg/"
  },
  {
      "name": "Dittin AI",
      "description": "包容的AI Chatbot社区，用于角色扮演",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172285093822099492.jpg",
      "favicon": "https://dittin.ai//favicon.ico",
      "url": "https://dittin.ai/"
  },
  {
      "name": "SoulFun",
      "description": "拥有栩栩如生的AI角色的聊天应用程序",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171072807636571639.webp",
      "favicon": "https://www.soulfun.ai/favicon.ico",
      "url": "https://www.soulfun.ai"
  },
  {
      "name": "Chatfuel",
      "description": "Chatfuel是WhatsApp API的官方合作伙伴，提供了一个用于商业沟通的消息平台。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168257976633272900.jpg",
      "favicon": "https://chatfuel.com/favicon.ico",
      "url": "https://chatfuel.com"
  },
  {
      "name": "Chatgot",
      "description": "Chatgot通过整合多个AI聊天助手到一个平台中，革新了我们与AI互动的方式。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/169885104197133852.jpg",
      "favicon": "https://www.chatgot.io/favicon.ico",
      "url": "https://www.chatgot.io"
  },
  {
      "name": "ChatBond | Free AI Chatbot Builder",
      "description": "用于即时客户回应的AI聊天机器人构建工具",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172230641180779347.jpg",
      "favicon": "https://chatbond.co/favicon.ico",
      "url": "https://chatbond.co"
  },
  {
      "name": "Jan",
      "description": "离线聊天GPT替代方案",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170815815642815952.jpg",
      "favicon": "https://jan.ai/favicon.ico",
      "url": "https://jan.ai"
  },
  {
      "name": "uncensored.com",
      "description": "一个没有审查或限制的 AI 聊天平台。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172714254977028397.jpg",
      "favicon": "https://uncensored.com//favicon.ico",
      "url": "https://uncensored.com/"
  },
  {
      "name": "Aicupid",
      "description": "无过滤NSFW AI聊天",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170688332419650570.jpeg",
      "favicon": "https://www.aicupid.org//favicon.ico",
      "url": "https://www.aicupid.org/"
  },
  {
      "name": "NinjaChat AI",
      "description": "强大的AI聊天机器人平台，集成了工具",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172051457255227832.jpg",
      "favicon": "https://ninjachat.ai//favicon.ico",
      "url": "https://ninjachat.ai/"
  },
  {
      "name": "luzia.com",
      "description": "基于 AI 功能的助手，为您提供日常任务支持。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171017735493103384.webp",
      "favicon": "https://luzia.com/favicon.ico",
      "url": "https://luzia.com"
  },
  {
      "name": "Play AI",
      "description": "实时语音AI平台",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171533934090577559.webp",
      "favicon": "https://play.ai/favicon.ico",
      "url": "https://play.ai"
  },
  {
      "name": "Poly AI",
      "description": "AI角色扮演：安全、免费聊天，没有限制！",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172732086827960068.jpg",
      "favicon": "https://polyai.ai//favicon.ico",
      "url": "https://polyai.ai/"
  },
  {
      "name": "NSFWChatAI",
      "description": "NSFWChatAI.ai 是一个 AI 虚拟女友聊天网站，您可以与您的虚拟女友自由聊天。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172844796813131268.jpg",
      "favicon": "https://nsfwchatai.ai//favicon.ico",
      "url": "https://nsfwchatai.ai/"
  },
  {
      "name": "VocAI Chatbot",
      "description": "构建您定制的AI聊天机器人来解决80%的客户支持问题。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170005793350779311.jpg",
      "favicon": "https://www.voc.ai/tools/ai-chatbot/favicon.ico",
      "url": "https://www.voc.ai/tools/ai-chatbot"
  },
  {
      "name": "Alice AI",
      "description": "Alice AI是一个无过滤聊天机器人，你可以设计自己的AI伴侣或探索仙境中的独特创作，提供语音通话、图像生成和无限定制功能。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173025364975976102.jpg",
      "favicon": "https://alice-ai.com//favicon.ico",
      "url": "https://alice-ai.com/"
  },
  {
      "name": "Hume AI",
      "description": "通过AI衡量、理解和改善人类情感",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171169525804359044.webp",
      "favicon": "https://www.hume.ai/favicon.ico",
      "url": "https://www.hume.ai"
  },
  {
      "name": "LemonChat",
      "description": "通过文本或视频与陌生人匿名聊天。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173978468359242756.jpg",
      "favicon": "https://lemonchat.app/favicon.ico",
      "url": "https://lemonchat.app"
  },
  {
      "name": "Poly ai ai",
      "description": "PolyAI为企业提供顾客导向的语音助手，实现品牌体验的一致性和基于数据驱动的商机。",
      "cover": "https://cdn-images.toolify.ai/image/5ae8f2e24aa37c9ec0d84f6a65fd3744.jpeg",
      "favicon": "https://poly.ai/favicon.ico",
      "url": "https://poly.ai"
  },
  {
      "name": "XJoy AI",
      "description": "XJoy AI，满足所有幻想的一个网站。XJoy AI目前是市场上功能最齐全、工具最强大的人工智能产品。www.xjoy.ai包含：AI女友、AI换脸、AI舞蹈、AI脱衣、AI性感姿势。xjoy.ai的AI聊天功能支持实时生成场景图片，让你沉浸在场景中，并可以和你的AI女友进行更多有趣的互动。xjoy.ai的AI换脸支持8K高清长视频和多人换脸。xjoy.ai的AI舞蹈功能是互联网上当前独家的项目。来xjoy.ai体验，让任何人为你跳舞。xjoy.ai的脱衣AI功能可以更精确地脱掉任何人的衣服，并能调整体型，比如胸围等。xjoy.ai的脱衣功能也可以从一张照片生成短视频！xjoy.ai的性感相册功能可以利用任何人的照片生成多套性感造型，并自动生成只属于你的私人相册。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173552215148708070.jpg",
      "favicon": "https://www.xjoy.ai/favicon.ico",
      "url": "https://www.xjoy.ai"
  },
  {
      "name": "Sharly AI",
      "description": "与任何文件和PDF进行交流",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170530218946134172.png",
      "favicon": "https://sharly.ai/favicon.ico",
      "url": "https://sharly.ai"
  },
  {
      "name": "Arvin - AI Assistant",
      "description": "AI助手，用于艺术、摘要和内容",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171776929422132595.webp",
      "favicon": "https://arvin.chat//favicon.ico",
      "url": "https://arvin.chat/"
  },
  {
      "name": "myStylus",
      "description": "基于AI的写作、编辑和研究平台。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172544450414418609.jpg",
      "favicon": "https://eduforms.org/favicon.ico",
      "url": "https://eduforms.org"
  },
  {
      "name": "Ryne AI",
      "description": "超级强大的Humanizer与不可探测的AI写作工具。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173320562492599447.jpg",
      "favicon": "https://ryne.ai/favicon.ico",
      "url": "https://ryne.ai"
  },
  {
      "name": "LiveChatAI",
      "description": "通过AI聊天机器人和实时聊天简化客户支持",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170651764078351986.jpg",
      "favicon": "https://livechatai.com/favicon.ico",
      "url": "https://livechatai.com"
  },
  {
      "name": "Sourcetable - AI spreadsheet",
      "description": "由AI驱动的电子表格工具，用于提升生产力和数据洞察。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173578402493824681.jpg",
      "favicon": "https://sourcetable.com/favicon.ico",
      "url": "https://sourcetable.com"
  },
  {
      "name": "Chat100.ai",
      "description": "无需登录即可免费访问先进的 AI 聊天模型。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172924078132973685.jpg",
      "favicon": "https://chat100.ai/favicon.ico",
      "url": "https://chat100.ai"
  },
  {
      "name": "TARS",
      "description": "Tars是一个通过AI驱动的聊天机器人增强客户参与度和支持的平台。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/16825884926559843.jpg",
      "favicon": "https://hellotars.com/favicon.ico",
      "url": "https://hellotars.com"
  },
  {
      "name": "Pickaxe",
      "description": "无代码平台Pickaxe使即使不懂编码的工程师能够轻松构建和管理AI应用。",
      "cover": "https://cdn-images.toolify.ai/image/681a1d7c7c722171e26eb7adec5695f8.jpeg",
      "favicon": "https://www.pickaxeproject.com/favicon.ico",
      "url": "https://www.pickaxeproject.com"
  },
  {
      "name": "WebBotify",
      "description": "只需几次点击即可通过ChatGPT聊天机器人增强访客互动。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168700162365016922.jpg",
      "favicon": "https://www.webbotify.com///favicon.ico",
      "url": "https://www.webbotify.com//"
  },
  {
      "name": "AmigoChat",
      "description": "各种任务的人工智能助手",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/1720624767830923.jpg",
      "favicon": "https://www.amigochat.io/favicon.ico",
      "url": "https://www.amigochat.io"
  },
  {
      "name": "CustomGPT",
      "description": "使用业务内容创建自己的聊天机器人，提供准确和安全的回答。",
      "cover": "https://cdn-images.toolify.ai/image/645118f150a8e4374cb4b7be1ee114ec.jpeg",
      "favicon": "https://customgpt.ai/favicon.ico",
      "url": "https://customgpt.ai"
  },
  {
      "name": "SiteGPT",
      "description": "SiteGPT是一个平台，允许网站所有者基于他们的内容创建AI聊天机器人。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168577836239544497.jpg",
      "favicon": "https://sitegpt.ai//favicon.ico",
      "url": "https://sitegpt.ai/"
  },
  {
      "name": "BotPenguin Chatbot",
      "description": "BotPenguin是一个AI聊天机器人，帮助企业自动化客户支持和与访客互动。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168517276999227730.jpg",
      "favicon": "https://botpenguin.com/favicon.ico",
      "url": "https://botpenguin.com"
  },
  {
      "name": "MeetCody",
      "description": "Cody是一款通过回答问题、疑难解答和完成任务来支持团队的AI助手。",
      "cover": "https://cdn-images.toolify.ai/image/ac3eaaa60f5623171d836c99057a6e87.jpeg",
      "favicon": "https://meetcody.ai/favicon.ico",
      "url": "https://meetcody.ai"
  },
  {
      "name": "Doctronic AI Doctors + Human Doctors",
      "description": "AI医疗平台，提供即时咨询和视频看诊。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173486444090634185.jpg",
      "favicon": "https://www.doctronic.ai/favicon.ico",
      "url": "https://www.doctronic.ai"
  },
  {
      "name": "ModelsLab",
      "description": "最好的AI套件，满足您所有生成需求。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172369273257305170.jpg",
      "favicon": "https://modelslab.com/favicon.ico",
      "url": "https://modelslab.com"
  },
  {
      "name": "StockTune",
      "description": "免费AI音乐，无尽可能性",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/171284462620686420.webp",
      "favicon": "https://stocktune.com/favicon.ico",
      "url": "https://stocktune.com"
  },
  {
      "name": "Intellectia.Ai",
      "description": "顶级AI投资平台，AI与您的雄心相遇！",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172584669853926020.jpg",
      "favicon": "https://intellectia.ai/favicon.ico",
      "url": "https://intellectia.ai"
  },
  {
      "name": "Flave AI",
      "description": "定制你的人工智能女友进行聊天。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173621485731684519.jpg",
      "favicon": "https://www.flave.ai/favicon.ico",
      "url": "https://www.flave.ai"
  },
  {
      "name": "ChatGPT Writer",
      "description": "AI驱动的ChatGPT Writer帮助用户轻松撰写和有效改进文本。",
      "cover": "https://cdn-images.toolify.ai/image/78db4dc7945e52ed2055faab8c46a6a4.jpeg",
      "favicon": "https://chatgptwriter.ai/favicon.ico",
      "url": "https://chatgptwriter.ai"
  },
  {
      "name": "AI Chatbot",
      "description": "通过Verloop.io的对话式AI聊天机器人，自动化支持呼叫并提升客户体验。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168517625031029813.jpg",
      "favicon": "https://verloop.io/favicon.ico",
      "url": "https://verloop.io"
  },
  {
      "name": "Woebot Health",
      "description": "Woebot是一款由人工智能驱动的心理健康助手，为个人提供基于证据的解决方案。",
      "cover": "https://cdn-images.toolify.ai/image/313ff3ad9ffffeb8aafe124b9dbcc32f.jpeg",
      "favicon": "https://woebothealth.com/favicon.ico",
      "url": "https://woebothealth.com"
  },
  {
      "name": "AlTable.ai: No-code Al Agents Builder",
      "description": "一键将表格转化为AI聊天机器人。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/169917803731451943.jpg",
      "favicon": "https://aitable.ai//favicon.ico",
      "url": "https://aitable.ai/"
  },
  {
      "name": "Magai",
      "description": "面向内容创作者的AI工具",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170349974455372879.jpg",
      "favicon": "https://magai.co//favicon.ico",
      "url": "https://magai.co/"
  },
  {
      "name": "AIChatru.ru: Free Chat with GPT and Claude AI",
      "description": "免费与 GPT-4o、GPT-4o Mini 和 Claude 3 AI 模型聊天，无需登录。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/173025358425135459.jpg",
      "favicon": "https://aichatru.ru/favicon.ico",
      "url": "https://aichatru.ru"
  },
  {
      "name": "GPTBots.AI",
      "description": "功能强大的AI机器人平台为业务构建",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/user-upload/1741150929_11505066",
      "favicon": "https://www.gptbots.ai/favicon.ico",
      "url": "https://www.gptbots.ai"
  },
  {
      "name": "MindPal for YouTube",
      "description": "MindPal：为专业人士提供的人工智能驱动平台，以提高工作效率，并提供各种功能。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/168545533358761658.jpg",
      "favicon": "https://www.mindpal.space/favicon.ico",
      "url": "https://www.mindpal.space"
  },
  {
      "name": "ChatGPT Deutsch - GPTDeutsch.com",
      "description": "德语自然语言模型。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/170282402836940297.jpg",
      "favicon": "https://gptdeutsch.com/favicon.ico",
      "url": "https://gptdeutsch.com"
  },
  {
      "name": "vidu.studio",
      "description": "AI 工具，用于从文本和图片生成高质量视频。",
      "cover": "https://nav-station.oss-accelerate.aliyuncs.com/172855771186536913.jpg",
      "favicon": "https://www.vidu.com/create/favicon.ico",
      "url": "https://www.vidu.com/create"
  }
]

export async function batchWebsite(models, ) {
  const { data } = await models.nav_website.createMany({
    data: mockData.map(item => ({
      ...item,
      category_id: {
        _id: 'B1B5TPQVYU' // AI聊天
      }
    }))
  });
  return data;
}

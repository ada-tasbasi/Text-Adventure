const textNodes = [
    {
        id:0,
        chapter:'CHOOSE YOUR OWN ADVENTURE',
        infoText:`A Text Adventure Demo Made With ReactJS`,
        altersState:true,
        stateData:[{name:`stage`, value: 1}], 
        nextNode: 1
    },
    {
        id:1,
        text:`You are a new adventurer exploring the woods. You bought a sword with your last coin and decided to seek fortune in dangerous places of the world. Slowly but surely you make your way deeper into the woods, following the dirt road.`,
        nextNode: 2
    },
    {
        id:2,
        text:'Not long after walking several minutes you come to a crossroads. A signpost shows you the west path goes to an inn called Fleeting Rat; the northern path ahead takes you to a town called Oncyra. There is a path to the east yet no sign tells where it goes. Which path do you take?',
        options:[
            {
                text:'West',
                nextNode: 3
            },
            {
                text:'East',
                nextNode: 8
            },
            {
                text:'North',
                altersState:true,
                stateData:[{name:`stage`, value: 4}], 
                nextNode: 14
            },
        ]
    },
    {
        id:3,
        text:'You choose the road to the left and walk several minutes before it leads you to a little wooden building with a sign picturing a rat escaping a room. Sure enough you made your way to the inn. You can see the orange glow of the fire escaping the windows while murmurs come form the door.',
        altersState:true,
        stateData:[{name:`stage`, value: 2}], 
        nextNode: 4
    },
    {
        id:4,
        text:'Parting the doors you make go inside, receiving passing looks from the patrons. It looks like all of them are armed and armored. This has to be an adventurer inn. You catch the innkeeper\'s eye as he cleans a glass with a rag.',
        options:[
            {
                text:'Order some ale',
                checks:'gold',
                condition: (value) =>{
                    return value>=10?5:6 
                },
            },
            {
                text:'Go back to the crossroads',
                altersState:true,
                stateData:[{name:`stage`, value: 1}], 
                nextNode: 2
            },
        ]
    },
    {
        id:5,
        text:'You toss 10 coins on the counter and order an ale, the stern look of the innkeeper suddenly softens and he brings you a foamy drink. \n"Name\'s Bob. I get a lot of you adventuring types here you know. Always slaying something or guarding traders. I heard some of them talking about a cave filled with wolves east of here, you might want to check it out."',
        altersState:true,
        stateData:[{name:'gold', value:-10}],
        infoText: '10 Gold lost',
        nextNode: 7
    },
    {
        id: 6,
        text:'You reach for your pockets to take out some gold but your hand only grasps at empty linen. You shrug looking at the innkeep and leave the inn.',
        altersState:true,
        stateData:[{name:`stage`, value: 1}], 
        nextNode: 2
    },
    {
        id:7,
        text:'You finish your drink and look around. It doesn\'t look like there is anymore things to do here. Maybe you should follow up with that cave. You return to the crossroads contemplating what to do next.',
        altersState:true,
        stateData:[{name:`stage`, value: 3}], 
        nextNode: 2 
    },
    {
        id:8,
        text:'Deciding on taking the eastern road you begin walking along the dirt path, which gets tighter and smaller as you go on. Eventually it dissappears completely and you come to a rocky den with a cave entrance. There might be something of interest inside.',
        options:[
            {
                text:'Enter the cave',
                altersState:true,
                stateData:[{name:`stage`, value: 3}], 
                nextNode: 9
            },
            {
                text:'Go back',
                altersState:true,
                stateData:[{name:`stage`, value: 1}], 
                nextNode: 2
            }
        ]
    },
    {
        id:9,
        text: 'You enter the cave, venturing deeper into the dark. You take out the torch you carry around and light it. Not long after a growling noise comes from the depths; no wonder a pack of wild wolves made their home here. If you slay and bring their pelts to town you should fetch good gold, but will probably get hurt in the fight.',
        options:[
            {
                text:'Fight the wolves',
                nextNode: 10
            },
            {
                text:'Go back to the crossroads',
                altersState:true,
                stateData:[{name:`stage`, value: 1}], 
                nextNode: 2
            }
        ]
    },
    {
        id:10,
        text:'You decide to fight the wolves, this is what adventuring is about after all. Extending your torch out, a pair of glowing eyes greet you from the abyss. A black shaggy wolf emerges from the dark, with three others following its lead. Their ears are shot flat against their heads with fangs bared. You unsheath your sword in response.',
        altersState:true,
        stateData:[{name:'health', value:-20}],
        nextNode: 11
    },
    {
        id: 11,
        text:'The larger wolf in the front leaps at you in a flash but you raise your sword between it and yourself in defense, before its teeth reach you, it is impaled on the sharp steel. However the other wolves have alreadt surrounded you and now your weapon is stuck to the animal\'s torso. Before you can take it out, they claw and bite at your legs as their teeth clang against the steel armor.',
        infoText:'-20 Health',
        nextNode: 12
    },
    {
        id:12,
        text:'Finally the sword comes out and you swing it wildly in the narrow cavern. The other wolves have little space to dodge and despite your wounds you make short work of them. You sit down for a bit and catch your breath, feeling proud of your victory. Later you take the wolves out and skin them.',
        infoText:'(Wolf pelts added)',
        altersState: true,
        stateData:[{name:'wolfPelt', value:true}],
        nextNode: 13
    },
    {
        id:13,
        text:'With the job done and spoils in your pack there isn\'t anything else left to do in the cave so you head back to the crossroads.',
        altersState:true,
        stateData:[{name:`stage`, value: 1}], 
        nextNode: 2
    },
    {
        id: 14,
        text:'You take the road to the city, walking north until you see the walls. Passing a plain guard watch on a wooden fence wall you enter Oncyra. Fşrst thing you notice is how busy this city looks. There is a gigantic marketplace in the townsquare with merchants selling all kinds of goods. There is also an inn nearby. It\'s getting dark so a place to sleep would be good to have.',
        options:[
            {
                text:'Approach a merchant',
                nextNode: 15
            },
            {
                text:'Go to the inn.',
                altersState:true,
                stateData:[{name:`stage`, value: 6}], 
                nextNode: 18
            }
        ]
    },
    {
        id:15,
        text:'You make your way to the large market, and are greeted by a man with bushy black beard and a fur tunic. \n"Please, please come and take a look at my stock. I have the finest pelts and furs in the country!" He gestures to a crate of various pelts of animals. You have little use of such goods right now, but he might be interested in buying something from you.',
        options:[
            {
                text:'Sell to the merchant',
                checks:'wolfPelt',
                condition: (value)=>{return value?16:17}
            },
            {
                text:'Leave and go to the inn',
                altersState:true,
                stateData:[{name:`stage`, value: 6}], 
                nextNode: 18
            }
        ]
    },
    {
        id:16,
        text:'You reach to your pack and take out the wolf pelts you brought with you. You ask; "Would you be interested in these?" He grabs the pelts and examines them closely, running his hands along the fur. "Hmmm. Yes, this will do. I will give you 5 gold pieces for each; which adds up to 15 for all." \nThere is little point to hanging on to the pelts so you agree to the exchange, finally making some gold. This should be enough to get a room at the inn.',
        infoText:'(+15 Gold)',
        altersState:true,
        stateData:[{name:'gold', value:15}],
        nextNode: 18
    },
    {
        id:17,
        text:'You prepare to haggle with the merchant, but realize you have nothing to sell except the essential items you have on you. Perhaps you should come back another time when you have something to sell.',
        options:[
            {
                text:'Go back to the crossroads',
                altersState:true,
                stateData:[{name:`stage`, value: 1}], 
                nextNode:2
            },
            {
                text:'Go to the inn',
                altersState:true,
                stateData:[{name:`stage`, value: 6}], 
                nextNode:18
            }
        ]
    },
    {
        id:18,
        text:'You enter the inn and see the barmaid at the counter. She notices you walk in and waves. "Can I get you something; food, ale, or maybe a you\'d like a room? It is 15 gold for the night." It\'s already dark out so you ask for a room.',
        checks:'gold',
        condition:(value)=>{return value>=15?19:20}
    },
    {
        id:19,
        text:'You pay 15 gold and take the key to the room upstairs. Throwing yourself at the warm bed you enjoy a nice sleep.',
        altersState: true,
        stateData:[{name:'gold', value:-15}],
        nextNode:21
    },
    {
        id:20,
        text:'Seeing you have no gold to pay, you promptly say sorry to the barmaid.\n"Well, you look like you have no place to sleep and I can\'t let someone be left out on the streets. Tell you what, you can sleep in the cellar tonight for free. It\'s no a real bed but you can find some hay to lay on."\nYou thank her for the generosity and go down to the cellar, sleeping on the floor. It\'s uncomfortable but beats being out in the streets.',
        nextNode:21
    },
    {
        id:21,
        text:'End- Made by Ada Yankı Taşbaşı',
        nextNode:-1
    },
    {
        id:5000,
        text:'End- You ran out of health and died...somehow',
        nextNode:-1
    }
]

export default textNodes
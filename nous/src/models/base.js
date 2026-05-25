export default class Character {
    constructor(name, level, archetype, stats = {}) {
        this.name = name;
        this.level = level;
        this.archetype = archetype; //used to determine which formula will be used as main/priority while calculating dmg
        this.stats = { //off combat stats
            hp: Character.normalize(stats.hp),
            atk: Character.normalize(stats.atk ),
            def: Character.normalize(stats.def ),
            speed: Character.normalize(stats.speed ),
            critRate: Character.normalize(stats.critRate || 0.05),
            critDmg: Character.normalize(stats.critDmg || 0.50),
            breakEffect: Character.normalize(stats.breakEffect ),

            err: Character.normalize(stats.err || 1.00, true),
            maxEnergy: Character.normalize(stats.maxEnergy ),
            outHealBonus: Character.normalize(stats.outHealBonus ),
            elemDmgBonus: Character.normalize(stats.elemDmgBonus ),
            eHRate: Character.normalize(stats.eHRate ),
            effRes: Character.normalize(stats.effRes ),
            elationPercent: Character.normalize(stats.elationPercent || 0),
            resPen: Character.normalize(stats.resPen),
            defPen: Character.normalize(stats.defPen),
            aggro: Character.normalize(stats.aggro) /* fixed hidden values, on a future implementation, this will be used as one of the fundamental values
                of a future combat simulator*/,
            //TIIIL FURTHER NOOOTICE
        }

    }
    //now i have to do 
    static normalize(int, isEr = false) {
       return isEr ?  Math.max(int, 1.00 ) : Math.max(int, 0.00 )
    }
    static precisionFix(int) {
            return Number(presicionFix(int))
    }
    
}
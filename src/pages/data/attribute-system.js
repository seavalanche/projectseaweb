export const attributeContent = `
### The attributes
1. Celestial
	- Aether
	- Void
	- Light
	- Darkness
2. Natural
	- Fire
	- Water
	- Nature
	- Metal
	- Electric
	- Wind
3. Mental
	- Magical
	- Psionic
	- Spirit
	- Sound

### Attribute group interactions
1. Celestial is strong against Natural (+25%). Celestial hits Mental -25% and has 15% chance of inflicting Celestial's Judgment (Status Effect damage type)
2. Natural is strong against Mental (+25%). Natural hits Celestial -25% and has 15% chance of inflicting Nature's Terms (Status Effect stat downs type)
3. Mental is strong against Celestial (+25%). Mental hits Natural -25% and has 15% chance of inflicting Mental's Barrier (Status Effect stun type)

### Celestial interactions
1. Aether is strong against void, light, darkness (+-50%)
2. Void is strong against aether, void, light. Weak against darkness (+-50%)
3. Light is strong against void and darkness. Weak against light (+-50%)
4. Darkness is strong against aether and light. Weak against void and darkness (+-50%)

### Natural interactions
1. Fire is strong against nature and metal. Weak against fire, water, and wind (+-50%)
2. Water is strong against fire and metal. Weak against water, nature, and wind (+-50%)
3. Nature is strong against water and wind. Weak against fire, nature, and metal (+-50%)
4. Metal is strong against electric and wind. Weak against fire, water, nature, and metal (+-50%)
5. Electric is strong against water and electric. Weak against nature (+-50%)
6. Wind is strong against fire and nature. Weak against water, metal, electric, and wind (+-50%)

### Mental interactions
1. Magical is strong against magical and sound. Weak against psionic and spirit (+-50%)
2. Psionic is strong against spirit. Weak against psionic (+-50%)
3. Spirit is strong against psionic. Weak against spirit (+-50%)
4. Sound is strong against psionic and spirit. Weak against magical and sound (+-50%)

### Battle arena effects
1. In Celestial arena, Celestial mains get stats increase (ATK, DEF, SPD) by 25% for the first 10 turns of the battle
2. In Natural arena, Natural mains get status immunity for the first 10 turns of the battle
3. In Mental arena, Mental mains get damage resistance by 25% for the first 10 turns of the battle

### Battle scenario
1. An attack (fire) hits a character with three attributes (Aether, Nature, and Magical). The calculation is as follows
	- same group calculations: Fire (Natural) hits Nature (Natural) by +50%
	- different group calculations: Natural (fire) hits Celestial (Aether) by -25% but has 15% chance of inflicting Nature's Terms
	- different group calculations: Natural (fire) hits Mental (Magical) by +25%
	- in total = +50% - 25% + 25% + 15% chance of Nature's Terms = +50% + status effect
`;
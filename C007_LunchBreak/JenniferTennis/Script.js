// Chapter 7 - Jennifer Tennis Fight Load
function C007_LunchBreak_JenniferTennis_Load() {
	LoadFight("Jennifer", C007_LunchBreak_Jennifer_TennisDifficulty, 0);
}

// Chapter 7 - Jennifer Tennis Fight Run
function C007_LunchBreak_JenniferTennis_Run() {
	RenderFight();
}

// Chapter 7 - Jennifer Tennis Fight Click
function C007_LunchBreak_JenniferTennis_Click() {
	FightClick();
}

// Chapter 7 - Jennifer Tennis Fight Key Down
function C007_LunchBreak_JenniferTennis_KeyDown() {
	FightKeyDown();
}

// Chapter 7 - Jennifer Tennis Fight End
function C007_LunchBreak_JenniferTennis_FightEnd(Victory) {
	CurrentTime = CurrentTime + 300000;
	C007_LunchBreak_Jennifer_TennisVictory = Victory;
	if (Victory && (C007_LunchBreak_Jennifer_TennisDifficulty == "Normal")) C007_LunchBreak_Jennifer_MatchCount++;
	if (Victory && (C007_LunchBreak_Jennifer_TennisDifficulty == "Hard")) C007_LunchBreak_Jennifer_MatchCount = C007_LunchBreak_Jennifer_MatchCount + 2;
}
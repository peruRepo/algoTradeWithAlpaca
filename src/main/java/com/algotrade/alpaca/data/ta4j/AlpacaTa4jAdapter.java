package com.algotrade.alpaca.data.ta4j;

import java.time.Duration;
import java.time.Instant;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.ta4j.core.BarSeries;
import org.ta4j.core.BaseBar;
import org.ta4j.core.BaseBarSeriesBuilder;

import io.github.mainstringargs.domain.alpaca.bar.Bar;

public class AlpacaTa4jAdapter {
	
	public static BarSeries generateBars(List<Bar> bars, Duration durationOfBar){
		if(bars.size() <= 0){
			return null;
		}
		BaseBarSeriesBuilder builder = new BaseBarSeriesBuilder();
		List<org.ta4j.core.Bar> ta4jBars = new LinkedList<>();
		for(Bar bar: bars){
			org.ta4j.core.Bar ta4jBar = new BaseBar(durationOfBar, ZonedDateTime.ofInstant(Instant.ofEpochSecond(bar.getT()), ZoneOffset.UTC), bar.getO(), bar.getH(), bar.getL(), bar.getC(), bar.getV());
			ta4jBars.add(ta4jBar);
		}
		builder.withBars(ta4jBars);
		builder.withMaxBarCount(bars.size());
		return builder.build();
	}
}


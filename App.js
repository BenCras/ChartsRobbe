import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ContributionGraph} from "react-native-chart-kit";
import {Dimensions} from "react-native";

const data = [
  { date: "2023-01-02", count: 6 },
  { date: "2023-01-03", count: 3 },
  { date: "2023-01-04", count: 2 },
  { date: "2023-01-05", count: 9 },
  { date: "2023-01-06", count: 5 },
  { date: "2023-01-30", count: 8 },
  { date: "2023-01-31", count: 1 },
  { date: "2023-03-01", count: 4 },
  { date: "2023-04-02", count: 6 },
  { date: "2023-03-05", count: 15 },
  { date: "2023-02-28", count: 10 }
];

const chartConfig = {
  backgroundGradientFrom: "#6f6f6f",
  backgroundGradientFromOpacity: 0.3,
  backgroundGradientTo: "#6f6f6f",
  backgroundGradientToOpacity: 0.3,
  color: (opacity = 1) => `rgba(49, 101, 232, ${opacity})`, //color of squares
};

export default function App() {
  return (
    <View style={styles.container}>
      <ContributionGraph
          values={data}
          width={Dimensions.get("window").width *0.92}
          height={220}
          chartConfig={chartConfig}
          endDate={new Date("2023-03-06")} //last day displayed on chart
          numDays={72} //amount of days before endDate
          gutterSize={2} //space inbetween squares
          squareSize={20} //size of each square
          showMonthLabels={true} //show month name above the chart
          horizontal={true} //show horizontal or vertical chart
          showOutOfRangeDays={true} //fills a collumn of days until full
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

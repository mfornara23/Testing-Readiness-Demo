package demo;

import static org.assertj.core.api.Assertions.assertThat;
import static us.abstracta.jmeter.javadsl.JmeterDsl.httpSampler;
import static us.abstracta.jmeter.javadsl.JmeterDsl.testPlan;
import static us.abstracta.jmeter.javadsl.JmeterDsl.threadGroup;

import java.io.IOException;
import org.junit.jupiter.api.Test;
import us.abstracta.jmeter.javadsl.core.TestPlanStats;

class DemoblazePerformanceTest {

  @Test
  void loadHomeWithOneUserAndTenIterations() throws IOException {
    TestPlanStats stats = testPlan(
        // 1 virtual user, 10 iterations over the home page request.
        threadGroup(1, 10,
            httpSampler("https://www.demoblaze.com/"))
    ).run();

    assertThat(stats.overall().samplesCount()).isEqualTo(10);
    assertThat(stats.overall().errorsCount()).isZero();
  }
}

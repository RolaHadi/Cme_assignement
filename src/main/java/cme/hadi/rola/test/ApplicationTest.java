package cme.hadi.rola.test;
import com.sun.deploy.net.HttpResponse;
import junit.framework.TestCase;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApplicationTest extends TestCase {

        @Test
        public void shouldPassIfGetMallResponseCodeIsOK() throws Exception {
                CloseableHttpClient client = HttpClientBuilder.create().build();
                HttpResponse response = (HttpResponse) client.execute(new HttpGet("http://localhost:8080/api/location/mall"));
                int statusCode = response.getStatusCode();
                assertEquals(statusCode, 200);
        }
}

package jokefetcher;

import com.google.gson.Gson;
import dto.ChuckDTO;
import dto.CombinedDTO;
import dto.DadDTO;
import java.io.IOException;
import utils.HttpUtils;


public class JokeFetcher {
    public static void main(String[] args) throws IOException {
        Gson gson = new Gson();
        String chuck = HttpUtils.fetchData("https://api.chucknorris.io/jokes/random");
        ChuckDTO chuckDTO = gson.fromJson(chuck, ChuckDTO.class);
        
        String dad = HttpUtils.fetchData("https://icanhazdadjoke.com");
        DadDTO dadDTO = gson.fromJson(dad, DadDTO.class);
        
        CombinedDTO combinedDTO = new CombinedDTO(chuckDTO, dadDTO);
        System.out.println(combinedDTO);
    }
}

package dto;

/**
 *
 * @author rando
 */
public class CombinedDTO {
    private String joke1;
    private String joke1Reference;
    private String joke2;
    private String joke2Reference;

    public CombinedDTO(ChuckDTO Cdto, DadDTO Ddto) {
        this.joke1 = Cdto.getValue();
        this.joke1Reference = Cdto.getUrl();
        this.joke2 = Ddto.getJoke();
        this.joke2Reference = "https://icanhazdadjoke.com";
    }

    @Override
    public String toString() {
        return "CombinedDTO{" + "\njoke1=" + joke1 + "\njoke1Reference=" + joke1Reference + "\njoke2=" + joke2 + "\njoke2Reference=" + joke2Reference + '}';
    }
    
    
}

package kr.co.chunjae.gochowoo.model;

import kr.co.chunjae.gochowoo.model.base.Cart;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Getter @Setter
@Table(name = "t_pokemon_cart")
public class PokemonCart extends Cart {
    @ManyToOne
    @JoinColumn(name = "pokemon_id")
    private Pokemon pokemon;
}

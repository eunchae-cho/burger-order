package com.ec.hbg.controller.init

import com.ec.hbg.common.response.ApiResponse
import com.ec.hbg.model.Burger
import com.ec.hbg.model.Drink
import com.ec.hbg.model.Ingredient
import com.ec.hbg.model.Side
import com.ec.hbg.service.BurgerService
import com.ec.hbg.service.DrinkService
import com.ec.hbg.service.SequenceService
import com.ec.hbg.service.SideService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/init")
class InitController(
    private val burgerService: BurgerService,
    private val sideService: SideService,
    private val drinkService: DrinkService,
    private val sequenceService: SequenceService
) {
    @GetMapping("/burger")
    fun initBurger(): ApiResponse<String> {
        var burger = Burger(
            id = sequenceService.generateSequence(Burger.SEQUENCE_NAME)!!
        )
        burger.name = "시그니처 버거"
        burger.price = "8500"
        burger.description = "오브랜드만의 시그니처 버거"

        burger.ingredient = listOf(
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger.id,
                name = "패티"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger.id,
                name = "버거번"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger.id,
                name = "양파"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger.id,
                name = "양상추"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger.id,
                name = "토마토"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger.id,
                name = "특제소스"
            ),
        )

        burgerService.save(burger)

        var burger2 = Burger(
            id = sequenceService.generateSequence(Burger.SEQUENCE_NAME)!!
        )
        burger2.name = "시그니처 치즈버거"
        burger2.price = "9500"
        burger2.description = "시그니처 버거에 치즈 추가"

        burger2.ingredient = listOf(
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger2.id,
                name = "패티"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger2.id,
                name = "버거번"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger2.id,
                name = "양파"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger2.id,
                name = "양상추"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger2.id,
                name = "토마토"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger2.id,
                name = "특제소스"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger2.id,
                name = "치즈"
            ),
        )

        burgerService.save(burger2)

        var burger3 = Burger(
            id = sequenceService.generateSequence(Burger.SEQUENCE_NAME)!!
        )
        burger3.name = "코리안 비프 버거"
        burger3.price = "11500"
        burger3.description = "국내산 비프 버거"

        burger3.ingredient = listOf(
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger3.id,
                name = "패티"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger3.id,
                name = "버거번"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger3.id,
                name = "양파"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger3.id,
                name = "양상추"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger3.id,
                name = "불고기소스"
            ),
        )

        burgerService.save(burger3)

        var burger4= Burger(
            id = sequenceService.generateSequence(Burger.SEQUENCE_NAME)!!
        )
        burger4.name = "더블 비프 버거"
        burger4.price = "10500"
        burger4.description = "맛있는 패티가 두개"

        burger4.ingredient = listOf(
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger4.id,
                name = "패티"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger4.id,
                name = "버거번"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger4.id,
                name = "양파"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger4.id,
                name = "양상추"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger4.id,
                name = "토마토"
            ),
            Ingredient(
                id = sequenceService.generateSequence(Ingredient.SEQUENCE_NAME)!!,
                parentId = burger4.id,
                name = "특제소스"
            ),
        )

        burgerService.save(burger4)

        return ApiResponse.ok()
    }

    @GetMapping("/side")
    fun initSide(): ApiResponse<String> {
        val side = Side(
            id = sequenceService.generateSequence(Side.SEQUENCE_NAME)!!
        )
        side.name = "프렌치 프라이"
        side.price = "4500"
        side.description = "맛잇는 기본 감자튀김"

        sideService.save(side)

        val side2 = Side(
            id = sequenceService.generateSequence(Side.SEQUENCE_NAME)!!
        )
        side2.name = "고구마 프렌치 프라이"
        side2.price = "5500"
        side2.description = "오브랜드만의 특별한 고구마 튀김"

        sideService.save(side2)

        return ApiResponse.ok()
    }

    @GetMapping("/drink")
    fun initDrink(): ApiResponse<String> {

        val drink = Drink(
            id = sequenceService.generateSequence(Drink.SEQUENCE_NAME)!!
        )

        drink.name = "코카콜라"
        drink.price = "2500"

        drinkService.save(drink)

        val drink2 = Drink(
            id = sequenceService.generateSequence(Drink.SEQUENCE_NAME)!!
        )

        drink2.name = "코카콜라 제로"
        drink2.price = "2700"

        drinkService.save(drink2)

        val drink3 = Drink(
            id = sequenceService.generateSequence(Drink.SEQUENCE_NAME)!!
        )

        drink3.name = "스프라이트"
        drink3.price = "2500"

        drinkService.save(drink3)

        val drink4 = Drink(
            id = sequenceService.generateSequence(Drink.SEQUENCE_NAME)!!
        )

        drink4.name = "오렌지 주스"
        drink4.price = "2000"

        drinkService.save(drink4)

        return ApiResponse.ok()
    }
}
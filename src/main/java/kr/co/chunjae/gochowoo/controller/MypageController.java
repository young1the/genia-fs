package kr.co.chunjae.gochowoo.controller;

import kr.co.chunjae.gochowoo.model.Community;
import kr.co.chunjae.gochowoo.model.Purchase;
import kr.co.chunjae.gochowoo.model.User;
import kr.co.chunjae.gochowoo.service.CommunityService;
import kr.co.chunjae.gochowoo.service.UserService;
import kr.co.chunjae.gochowoo.service.order.PurchaseService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/mypage")
public class MypageController {

    private final UserService userService;
    private final PurchaseService purchaseService;
    private final CommunityService communityService;

    @GetMapping()
    public String showShopPage(HttpSession session, Model model) {
        String email = (String) session.getAttribute("email");
        if(email == null) {
            return "views/user/login";
        }
        User user = userService.userInfo(email);
        model.addAttribute("user", user);
        return "views/mypage/mypage";
    }

    @GetMapping("/purchase")
    public String showPurchasePage(@SessionAttribute(name = "id", required = false) Long userId, Model model) {
        if (userId != null) {
            List<Purchase> purchaseList = purchaseService.getAllPurchasesByUserId(userId);
            model.addAttribute("purchaseList", purchaseList);
            return "views/mypage/purchase/purchase";
        }
        return "views/user/login";
    }

    @GetMapping("/purchase/{id}")
    public String showPurchaseDetailPage(@SessionAttribute(name = "id", required = false) Long userId, Model model, @PathVariable Long id) {
        if (userId != null) {
            Purchase purchase = purchaseService.getPurchaseByOrderId(id);
            System.out.println(purchase);
            model.addAttribute("purchase", purchase);
            return "views/mypage/purchase/purchaseDetail";
        }
        return "views/user/login";
    }

    @GetMapping("/cash")
    public String showCashPage() {
        return "views/mypage/cash";
    }
    @GetMapping("/cash/currentCash")
    public ResponseEntity<Long> getUserCash(HttpServletRequest request) {
        String email = (String) request.getSession().getAttribute("email");
        if (email != null) {
            Long cashValue = userService.getCash(email).getCash();
            return ResponseEntity.ok(cashValue);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(0L);
        }
    }

    @GetMapping("/post")
    public String showPostPage(HttpSession session, Model model) {
        User user = (User) session.getAttribute("user");
        if (user == null) {
            return "redirect:/user/login";
        }
        List<Community> postList = communityService.getAllBoardByUserId(user.getId());
        model.addAttribute("postList", postList);
        return "/views/mypage/post";
    }
}
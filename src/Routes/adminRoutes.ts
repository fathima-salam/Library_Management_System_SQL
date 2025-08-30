import { Router } from "express";
import {loginController} from "../Controllers/loginController";
import {bookController} from "../Controllers/bookController";
import { userController } from "../Controllers/userController";
import {orderController } from "../Controllers/orderController";

const router = Router()
const bookCntrl = new bookController();
const controller = new loginController();
const userCntrl  = new userController();
const orderCntrl = new orderController();

router.get('/',controller.login);
router.post('/login',controller.postlogin);

router.get('/books',bookCntrl.viewbook);
router.post('/books',bookCntrl.addbook);
router.post('/books/:id/edit',bookCntrl.editbook);
router.post('/books/:id/delete',bookCntrl.deletebook);

router.get('/users',userCntrl.viewUsers);
router.post('/users',userCntrl.addUser)
router.post('/users/:userId/edit', userCntrl.editUser);
router.post('/users/:userId/delete', userCntrl.deleteUser);

router.get('/orders',orderCntrl.viewOrders);
router.post('/orders', orderCntrl.addOrder);
router.post('/orders/:id/edit', orderCntrl.editOrder);
// router.post('/orders/:id/return', orderCntrl.returnBook);


export default router;